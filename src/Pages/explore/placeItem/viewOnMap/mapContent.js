import React from 'react'
import styles from "./mapContent.module.css"
import generalStyles from "./alertContainer.module.css";
import earthStyles from "../../../yourTrip/Trips/modals/subModals/location/location.module.css";
import Location from "../../../yourTrip/Trips/modals/subModals/location";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect, useState } from 'react';



const MapContent = () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZG9tYnViMSIsImEiOiJjbGR4N3M5ZWowZW1jM29yeHR6ZDZ4a2Z2In0.Nvxa1Vv6L-7YlWhT5CW47w'; 
    const mapContainer = useRef(null);
    const [coords, setCoords] = useState( [ 32.29650083636824, 23.670783991562146 ] );
    const map = useRef(null);
    const marker = new mapboxgl.Marker()

    useEffect(() => {
        if (map.current) return; // initialize map only once
        
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/dombub1/cldxm1e12000l01p74f12s7l7",
          center: coords,
          zoom: 0,
        });
  
        map.current.addControl(new mapboxgl.FullscreenControl());
    
        // map.current.on('click', (e) => {
        //   onUpdateLocation(e.lngLat)
          
        // });
    
        map.current.on("load", () => {
          marker.setLngLat(coords).addTo(map.current);
        })
    
    
      });

  return (
    <div className={styles.mapContent}>
        
        <div className={generalStyles.alert_message}>
            <h1>Help us approve this location</h1>
        </div>

        <div className={styles.mapContainer}>
          <div ref={mapContainer} className={earthStyles.map_container} />
          {/* <div className={styles.footer}></div> */}
        </div>
    </div>
  )
}

export default MapContent