import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';
import "./componentStyles/Map.css";
import "leaflet/dist/leaflet.css";

function Map({ countries, center, zoom }) {

    const casesTypesDict = {
        cases: {
            hex: "#CC1034",
            multiplier: 600
        },
        recovered: {
            hex: "#7dd71d",
            multiplier: 1000
        },
        deaths: {
            hex: "#fb4443",
            multiplier: 1600
        }
    }

    const drawCirclesWithCases = countries => {
        return countries.map(country => (
            <Circle
                key={country.country}
                center={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}
                fillOpacity={0.4}
                color={casesTypesDict.cases.hex}
                radius={
                    Math.sqrt(country.cases) * casesTypesDict.cases.multiplier
                } >
                <Popup>
                    <div className="popup">
                        <div className="popup__flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }}></div>
                        <div className="popup__country">{country.country}</div>
                        <div className="popup__cases">Cases: {numeral(country.cases).format("0.0)")}</div>
                        <div className="popup__recovered">Recovered: {numeral(country.recovered).format("0.0)")}</div>
                        <div className="popup__deaths"> Deaths: {numeral(country.deaths).format("0.0)")}</div>
                    </div>
                </Popup>
            </Circle>

        ))
    }
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {drawCirclesWithCases(countries)}
            </LeafletMap>
        </div>
    )
}

export default Map
