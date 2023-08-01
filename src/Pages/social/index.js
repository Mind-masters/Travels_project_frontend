import React from 'react'
import styles from "./social.module.css"
import { useState } from 'react';
import InvitorsList from "./invitorsList";
import Controllers from './controllers';
import card_image_1 from "../../assets/your-trip/card_image_1.png";
import card_image_2 from "../../assets/your-trip/card_image_2.png";
import Card from '../../components/shared/UI/Card';
import MainHeader from '../../components/shared/UI/pagesHeaders';
import io from 'socket.io-client';
import { useEffect } from 'react';
import LoadingSpinner from '../../components/shared/UI/LoadingSpinner';
import { fetchAllInvitings } from '../../components/utils/invitings/fetchInvitings';
import PageViewTracker from '../../components/shared/UI/RouteChnage/PageViewTracker';


const FellowTraveler = () => {
    
    const socket = io('https://mind-master-backend-production.up.railway.app', {transports: ['websocket', 'polling', 'flashsocket']});
    const [isLoading, setIsLoading] = useState(true);
    const [invitingsData, setInvitingsData] = useState(null);
    

    useEffect(() => {

        const handleInvitingsData = async() => {

            const defaultData = await fetchAllInvitings();

            if(!defaultData.status)return alert(defaultData.message);

            setIsLoading(false);
            setInvitingsData(defaultData.data)

            // Listen for inviting events from the server
            socket.on('invitings', (data) => {
                setInvitingsData(data.invitings)
            });
    
            // // Clean up the socket event listeners when the component unmounts
            return () => {
                socket.off('invitings');
            };
        }

        handleInvitingsData();
    }, []);


    return (
        <>
        {
        (isLoading && !invitingsData) ? <LoadingSpinner asOverload /> :
        <Card>
            <div className={styles.wrapper}>

                <MainHeader 
                    header="Social network"
                />

                <h1 className={styles.main_header}>
                    Whatever your interest, from hiking and reading to networking and exploring abandoned places, there are thousands of people who share it on <span>TripWhoop</span>.
                </h1>

                <Controllers />
                {invitingsData && invitingsData.length > 0 && <InvitorsList data={invitingsData}/>}
            </div>
            <PageViewTracker/>
        </Card>
        }
        </>
    )
}

export default FellowTraveler