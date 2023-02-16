import styles from "./location.module.css";
import Button from "../../../../../../components/shared/UI/button/Button"
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MessageBox from "./messageBox";

const Location = (props) => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZG9tYnViMSIsImEiOiJjbGR4N3M5ZWowZW1jM29yeHR6ZDZ4a2Z2In0.Nvxa1Vv6L-7YlWhT5CW47w'; 
    
    const [coords, setCoords] = useState( [ 32.29650083636824, 23.670783991562146 ] );
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = new mapboxgl.Marker()
    const [activeButton, setActiveButton] = useState(false)
  
    useEffect(() => {
      if (map.current) return; // initialize map only once
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/dombub1/cldxm1e12000l01p74f12s7l7",
        center: coords,
        zoom: 0,
      });

      map.current.addControl(new mapboxgl.FullscreenControl());
  
      map.current.on('click', (e) => {
        onUpdateLocation(e.lngLat)
        
      });
  
      map.current.on("load", () => {
        marker.setLngLat(coords).addTo(map.current);
      })
  
  
    });
  
    const onUpdateLocation = (obj) => {
      const coords = [obj.lng, obj.lat]
      marker.setLngLat(coords);
      setCoords(coords);
      setActiveButton(true);
    }

    const onSubmitHandler = () => {
      props.onSubmit({longitude: coords[0], latitude: coords[1]});
    }

    return (
        <div className={styles.globe} style={{ position: "relative" }}>
          <div ref={mapContainer} className={styles.map_container} />
          { activeButton &&
            <div className={styles.controllers}>
              <Button onSubmit={onSubmitHandler}>
                Submit
              </Button>
            </div>
          }
          <div className={styles.footer} onClick={props.onClose}></div>
        </div>
    )
}

export default Location



