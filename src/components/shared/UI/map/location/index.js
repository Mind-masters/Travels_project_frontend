import styles from "./location.module.css";
import Button from "../../button/Button";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Location = (props) => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZG9tYnViMSIsImEiOiJjbGR4N3M5ZWowZW1jM29yeHR6ZDZ4a2Z2In0.Nvxa1Vv6L-7YlWhT5CW47w'; 
    
    const [coords, setCoords] = useState( props.show_location || [ 32.29650083636824, 23.670783991562146 ] );
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = new mapboxgl.Marker()
    const [activeButton, setActiveButton] = useState(false)
  
    useEffect(() => {
      if (map.current) return;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/dombub1/cle3ugc4t000601p8afbwwb9t",
        center: coords,
        zoom: 0.9,
      });

      if(!props.show_location){
        map.current.on('click', (e) => {
          onUpdateLocation(e.lngLat)
        });
      }
  
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
      if(!props.show_location)return props.onSubmit({longitude: coords[0], latitude: coords[1]});
      else return props.onClose();
    }

    return (
        <div className={styles.globe} style={{ position: "relative" }}>
          <div ref={mapContainer} className={styles.map_container} />
          { ((!props.show_location && activeButton) || props.show_location) &&
            <div className={styles.controllers}>
              <Button onSubmit={onSubmitHandler}>
                {!props.show_location ? "Submit" : "Continue"}
              </Button>
            </div>
          }
          <div className={styles.footer} onClick={props.onClose}></div>
        </div>
    )
}

export default Location



