import React from 'react';
import { Grid } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import "../stylesheets/MapAndFooter.css"

export default function FCubeMap() {

    let F3Icon = L.icon({
        iconUrl: "../images/marker.png",
        iconAnchor: [19, 51],
        popupAnchor: [5, -44],
        iconSize: [43, 55],
    })

    let cities = [{ name: "Paris", lat: 48.856613, lon: 2.352222 }, { name: "Dakar", lat: 14.716677, lon: -17.467686 }, { name: "Beyrouth", lat: 33.893791, lon: 35.501777 }, { name: "San Francisco", lat: 37.774929, lon: -122.419418 }, { name: "Milan", lat: 45.464203, lon: 9.189982 }, { name: "Yaoundé", lat: 3.848032, lon: 11.502075 }]

    return (
        <Grid container className="footer-content">

            <Grid item xs={12} className="footer-panel">
                <div className="footer-panel-content">
                    <MapContainer className="map-container" center={[14.716677, -17.467686]} zoom={1.5}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" className='map-tiles'
                        />
                        {cities.map(city => {
                            return (<Marker icon={F3Icon} position={[city.lat, city.lon]}>
                                <Popup>
                                    <p className="map-PopUp-title">{city.name}</p>
                                </Popup>
                            </Marker>)
                        })}
                    </MapContainer>
                </div>
            </Grid>
        </Grid>
    )
}