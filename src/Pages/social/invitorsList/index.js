import React, { useEffect, useState } from 'react'
import styles from "./list.module.css";
import InvitorItem from './invitorItem';
import filter_icon from "../../../assets/your-trip/filter_icon.png";
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';


const InvitorsList = ({data}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 1300);

    }

  }, [isLoading])

  return (
    <div className={`${styles.container}`}>
      {
        isLoading && 
        <InsideBounce />
      }
      
      <div className={styles.header_line}>
        <h1>{data.length} travelers are looking for companions</h1>
        <div className={styles.filter}>
          <img src={filter_icon} alt=""/>
          <h1>Filter</h1>
        </div>
      </div>

      {data.map((invite, key) => <InvitorItem key={key} invite={invite} />)}
    </div>
  )
}

export default InvitorsList