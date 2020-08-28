import React, { useState, useEffect } from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core';
import './componentStyles/Header.css';

function Header({ selectedCountry, onCountryChange }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries", {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    const countries = data.map(country => ({
                        id: country.id,
                        name: country.country,
                        countryCode: country.countryInfo.iso2
                    }))
                    setCountries(countries);
                })
        }

        getCountriesData();
    }, [])

    return (
        <div className="app__header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="app__dropdown">
                <Select variant="outlined" value={selectedCountry} onChange={onCountryChange}>
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {countries.map(country => {
                        return <MenuItem key={country.name} value={country.countryCode}>{country.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export default Header
