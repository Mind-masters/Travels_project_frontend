import React, { useEffect, useState } from 'react'
import styles from "./selectCountryModal.module.css";
import LoadingSpinner from "../../LoadingSpinner";
import Switch from "react-switch";

const SelectCountryModal = (props) => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const [showContriesNames, setShowCountriesNames] = useState(true); 
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchCountriesData = async() => {

      try {
        const reqData = await fetch("https://restcountries.com/v3.1/all");

        if(!reqData.ok)throw new Error("failed to fetch countries");

        const rspJson = await reqData.json();

        setIsLoading(false);

        setData(rspJson);

  
      } catch (error) {
        console.log("Failed to fetch countries...", error);
      }
    }

    fetchCountriesData();
  }, [])

  const countryClickHandler = (country) => {
    return props.onSubmit(country, true);
  }
  
  const countriesList = data ? data
    .filter((country) => {
      if (searchTerm === '') return country
      else if (country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
        return country
    })
    .map((country) => (
      <div key={country.name.common} onClick={countryClickHandler.bind(null,country)} className={`${styles.countries_container} ${showContriesNames ? styles.countries_container_extra_space : styles.countries_container_collapsed}`}>
        <img src={country.flags.png} alt="flag"/>
        {showContriesNames && <h1>{country.name.common}</h1>}
      </div>
    ))
    : []

  

  return (
    <>
      {
        isLoading 
        ? 
        <LoadingSpinner /> 
        :
        <div className={styles.modal_content}>
          <div className={styles.top_menu_container}>
            <div className={styles.toogle_container}>
              <p>Show countries</p>
              <Switch onChange={() => {setShowCountriesNames(!showContriesNames)}} checked={showContriesNames} />
            </div>

            <div className={styles.search_container}>
              <input placeholder='Search by keywords' onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            
          </div>
          {
            data && countriesList
          }
        </div>
      }
    </>
  )
}

export default SelectCountryModal