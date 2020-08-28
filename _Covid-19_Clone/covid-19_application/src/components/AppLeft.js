import React, { useState, useEffect } from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map';
import "./componentStyles/AppLeft.css"

function AppLeft() {
    const [selectedCountry, setSelectedCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        const getInitialWorldWideInfo = async () => {
            await fetch("https://disease.sh/v3/covid-19/all", {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
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
                setCountryInfo(data)
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

            <Map />
        </div>
    )
}

export default AppLeft
