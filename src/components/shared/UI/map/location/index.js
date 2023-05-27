import styles from "./location.module.css";
import Button from "../../button/Button";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import closeIcon from "../../../../../assets/close-logo.png";
import submitIcon from "../../../../../assets/submit-logo.png";

const Location = (props) => {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZG9tYnViMSIsImEiOiJjbGR4N3M5ZWowZW1jM29yeHR6ZDZ4a2Z2In0.Nvxa1Vv6L-7YlWhT5CW47w'; 

    // const [coords, setCoords] = useState( props.show_location || [ 32.29650083636824, 23.670783991562146 ] );
    const [coords, setCoords] = useState( [ 32.29650083636824, 23.670783991562146 ] );

    console.log("coords: ", coords)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = new mapboxgl.Marker()
    const popup = new mapboxgl.Popup()
    const [activeButton, setActiveButton] = useState(false)
    const [zoomed, setZoomed] = useState(false);
  
    useEffect(() => {
      if (map.current && !zoomed) return;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/dombub1/cle3ugc4t000601p8afbwwb9t",
        center: coords,
      });

      if(!props.show_location){
        map.current.on('click', (e) => {
          onUpdateLocation(e.lngLat)
        });
      }
  
      map.current.on("load", () => {
        popup.setHTML((props.popup && `<h1>${props.popup}</h1>`) || `<h1>
        lng:  ${coords.longitude} <br />
        lat:  ${coords.latitude}
        </h1>`).addTo(map.current);
        marker.setLngLat(coords).addTo(map.current).setPopup(popup);
      })

      if(zoomed){
        map.current.flyTo({
          center: coords,
          zoom: 10,
          essential: true,
          duration: 25000
        });
      }      
  
  
    }, [zoomed]);


    
  
    const onUpdateLocation = (obj) => {
      const coords = [obj.longitude, obj.latitude]
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
              <Button color="rgba(0, 0, 0, 0.6)" border="2px solid white" onSubmit={onSubmitHandler}>
                <div className={styles.btn_content}>
                  <h1 style={{ color:"white" }}>{!props.show_location ? "Submit" : "Close"}</h1>
                  <img src={!props.show_location ? submitIcon : closeIcon } alt="" />
                </div>
              </Button>
            </div>
          }
          { props.show_location &&
            <div className={styles.controllers_zoom}>
              <Button color="rgba(0, 0, 0, 0.5)" border="2px solid white" onSubmit={() => setZoomed(!zoomed)}>
                  <h1 style={{ color:"white" }}>Zoom</h1>
              </Button>
            </div>
          }
          <div className={styles.footer} onClick={props.onClose}></div>
        </div>
    )
}

export default Location



