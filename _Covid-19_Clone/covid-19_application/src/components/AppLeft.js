import React, { useState, useEffect } from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map';
import "./componentStyles/AppLeft.css"

function AppLeft() {
    const worldCenterCoordinates = { lat: 34.80746, lng: -40.4796 };
    const [selectedCountry, setSelectedCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [mapCenter, setMapCenter] = useState(worldCenterCoordinates);

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
                console.log(data)

                data.hasOwnProperty('country')
                    ? setMapCenter([data.countryInfo.lat, data.countryInfo.long])
                    : setMapCenter(worldCenterCoordinates)
            })
    }

    return (
        <div className="appLeft">
            <Header selectedCountry={selectedCountry} onCountryChange={onCountryChange} />
            <div className="app__info">
                <InfoBox title="Coronavirus" cases={countryInfo?.todayCases} total={countryInfo?.cases} />
                <InfoBox title="Recovered" cases={countryInfo?.todayRecovered} total={countryInfo?.recovered} />
                <InfoBox title="Deaths" cases={countryInfo?.todayDeaths} total={countryInfo?.deaths} />
            </div>

            <Map center={mapCenter} zoom={2.5} />
        </div>
    )
}

export default AppLeft
