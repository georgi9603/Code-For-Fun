import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import "./componentStyles/Map.css";
import "leaflet/dist/leaflet.css";

function Map({ center, zoom }) {
    return (
        <div className='map'>
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LeafletMap>
        </div>
    )
}

export default Map
