import React, { useState, useEffect } from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map';
import { formatStats } from '../Utils/utils';
import "./componentStyles/AppLeft.css"

function AppLeft({ countries, dataType, ...props }) {
    const worldCenterCoordinates = { mapCenter: { lat: 30, lng: 15 }, zoom: 1.5 };
    const [selectedCountry, setSelectedCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [mapInfo, setMapInfo] = useState(worldCenterCoordinates);

    useEffect(() => {
        const getInitialWorldWideInfo = async () => {
            await fetch("https://disease.sh/v3/covid-19/all")
                .then(response => response.json())
                .then(data => {
                    setCountryInfo(data)
                })
        }
        getInitialWorldWideInfo();
    }, [])

    const onCountryChange = async e => {
        const countryCode = e.target.value;
        const url = countryCode === "worldwide"
            ? "https://disease.sh/v3/covid-19/all"
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setSelectedCountry(countryCode);
                setCountryInfo(data);
                data.hasOwnProperty('country')
                    ? setMapInfo({ mapCenter: { lat: data.countryInfo.lat, lng: data.countryInfo.long }, zoom: 4 })
                    : setMapInfo(worldCenterCoordinates)
            })
    };

    return (
        <div className="appLeft">
            <Header selectedCountry={selectedCountry} onCountryChange={onCountryChange} />
            <div className="app__info">
                <InfoBox
                    isActiveStyle={dataType === "cases" && "infobox__blue"}
                    onClick={e => props.onClick("cases")}
                    title="Coronavirus" cases={formatStats(countryInfo?.todayCases)}
                    total={formatStats(countryInfo?.cases)}
                />
                <InfoBox
                    isActiveStyle={dataType === "recovered" && "infobox__green"}
                    onClick={e => props.onClick("recovered")}
                    title="Recovered"
                    cases={formatStats(countryInfo?.todayRecovered)}
                    total={formatStats(countryInfo?.recovered)}
                />
                <InfoBox
                    isActiveStyle={dataType === "deaths" && "infobox__red"}
                    onClick={e => props.onClick("deaths")}
                    title="Deaths"
                    cases={formatStats(countryInfo?.todayDeaths)}
                    total={formatStats(countryInfo?.deaths)} />
            </div>

            <Map
                dataType={dataType}
                countries={countries}
                center={mapInfo.mapCenter}
                zoom={mapInfo.zoom}
            />
        </div>
    )
}

export default AppLeft
