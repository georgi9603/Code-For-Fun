import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';
import "./componentStyles/Map.css";
import "leaflet/dist/leaflet.css";

function Map({ countries, center, zoom, dataType }) {

    const casesTypesDict = {
        cases: {
            color: "rgba(65, 131, 215, 1)",
            multiplier: 600
        },
        recovered: {
            color: "rgba(0, 177, 106, 1)",
            multiplier: 600
        },
        deaths: {
            color: "#CC1034",
            multiplier: 600
        }
    }

    const drawCirclesWithCases = (countries, dataType = 'cases') => {
        return countries.map(country => (
            <Circle
                key={country.country}
                center={{ lat: country.countryInfo.lat, lng: country.countryInfo.long }}
                fillOpacity={0.4}
                color={casesTypesDict[dataType].color}
                radius={
                    Math.sqrt(country.cases) * casesTypesDict[dataType].multiplier
                } >
                <Popup>
                    <div className="popup">
                        <div className="popup__flag" style={{ backgroundImage: `url(${country.countryInfo.flag})` }}></div>
                        <div className="popup__country">{country.country}</div>
                        <div className="popup__cases">Cases: {numeral(country.cases).format("0,0,0")}</div>
                        <div className="popup__recovered">Recovered: {numeral(country.recovered).format("0,0,0")}</div>
                        <div className="popup__deaths"> Deaths: {numeral(country.deaths).format("0,0,0")}</div>
                    </div>
                </Popup>
            </Circle>
        ))
    }
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {drawCirclesWithCases(countries, dataType)}
            </LeafletMap>
        </div>
    )
}

export default Map
