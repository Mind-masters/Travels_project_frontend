import React from 'react';import styles from './destinations.module.css';import CarouseleList from '../../../components/shared/UI/carouseleList';import { fetchAllPlaces } from '../../../components/utils/places/fetchPlaces';import { useEffect } from 'react';import "react-toastify/dist/ReactToastify.css";import { notify } from "../../../components/shared/UI/toast";import { useState } from 'react';import Header from './header';import {PlacesData} from "./Data";import BottomBar from './Navi/bottomBar';import { BuaashContext } from '../../../contextAPI/shopContext/BuaashContext';import TopBar from './Navi/topBar';import { useNavigate } from 'react-router-dom';import { useContext } from 'react';
const Destinations = () => {
const [currPlaceType, setCurrPlaceType] = useState("Abandoned places")
const boom=useContext(BuaashContext)
useEffect(() => {
const fetchData = async() => {
const placesData = await fetchAllPlaces();
if(!placesData.status){
notify("Website under maintenance ", "error")
boom.serverReady=false;
setCurrPlaceType([]);
}
}
fetchData();
}, [])
return (
<div className={boom.serverReady ? styles.container : styles.err}>
<TopBar />
<div className={styles.header_block}></div>
<div className={styles.content}>
<div className={styles.header_wrapper}>
<Header />
</div>
<div className={styles.places_list}>
<BottomBar currPlaceType={currPlaceType} />
<div className={styles.carousele}>
<CarouseleList callback={(data)=>{setCurrPlaceType(data)}} data={PlacesData}/>
</div>
</div>
</div>
</div>
)
}
export default Destinations