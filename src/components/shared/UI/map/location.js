import styles from "./location.module.css";
import Button from "../button/Button";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import closeIcon from "../../../../assets/close-logo.png";
import submitIcon from "../../../../assets/submit-logo.png";
import Ripple from "../ripple";

const Location = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const access_token = 'pk.eyJ1IjoiZG9tYnViMSIsImEiOiJjbGR4N3M5ZWowZW1jM29yeHR6ZDZ4a2Z2In0.Nvxa1Vv6L-7YlWhT5CW47w'

  mapboxgl.accessToken = access_token; 

  const [coords, setCoords] = useState( props.show_location || [ 32.29650083636824, 23.670783991562146 ] );

  const onSendCoordinatesHandler = () => {
    const {lat, lng} = coords;

    console.log("sending coords: lat: ",lat ," lng:", lng)
  }

  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = new mapboxgl.Marker() // position [lng, lat]
  const [activeButton, setActiveButton] = useState(false)
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {

    
    if (map.current && !zoomed) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/dombub1/cle3ugc4t000601p8afbwwb9t?optimize=true",
      center: coords,
    });

    if(!props.show_location){
      map.current.on('click', (e) => {
        onUpdateLocation(e.lngLat)
      });
    }

    map.current.on("load", () => {
      marker.setLngLat(coords).addTo(map.current);
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

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, [])
    
  
  const onUpdateLocation = (obj) => {
    const {lat,lng} = obj;
    const coords = {lng: lng, lat: lat}
    marker.setLngLat(coords);
    setCoords(coords);
    setActiveButton(true);
  }

  const onSubmitHandler = async() => {
    const {lat, lng} = coords;

    if(!props.show_location)return props.onSubmit({lat,lng}); // cords[lng, lat]
    else return props.onClose();
  }

  return (
    <>
      {
        isLoading &&
        <div className={styles.loading__}>
          <div className={styles.loading__icon}>
            <Ripple bright={true} />
          </div>
        </div>
      }
      <div className={styles.globe} style={{ position: "relative" }}>
        <div ref={mapContainer} className={styles.map_container} />
        { ((!props.show_location && activeButton) || props.show_location) &&
          <div className={styles.controllers}>
            <div className={styles.controllers_insider}>
              <Button color="rgba(0, 0, 0, 0.5)" border="2px solid white" onSubmit={() => setZoomed(!zoomed)}>
                <h1 className={styles.btn_text}>Zoom</h1>
              </Button>

              <Button color="rgba(0, 0, 0, 0.6)" border="2px solid white" onSubmit={onSubmitHandler}>
                <div className={styles.btn_content}>
                  <h1 className={styles.btn_text}>{!props.show_location ? "Submit" : "Close"}</h1>
                  <img src={!props.show_location ? submitIcon : closeIcon } alt="" />
                </div>
              </Button>
            </div>
          </div>
        }
        { props.show_location &&
          <div className={styles.get_coordinates}>
            <Button color="rgba(0, 0, 0, 0.5)" border="2px solid white" onSubmit={onSendCoordinatesHandler}>
              <h1 className={styles.btn_text}>Get coordinates</h1>
            </Button>
          </div>
        }
        <div className={styles.footer} onClick={props.onClose}>
          
        </div>
      </div>
    </>
  )
}

export default Location



