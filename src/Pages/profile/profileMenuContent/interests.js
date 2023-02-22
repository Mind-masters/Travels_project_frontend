import React, {useEffect, useState} from 'react'
import styles from "./interests.module.css"


const Interests = (props) => {

    const getArrayOfRows = (data) => {

        if(!data || (data && !data.length > 0))return null
    
        const collums = [];
        let rows = [];
        let newRowIndex = 1;
        let temp = 0;
    
        while(temp < data.length){
        rows.push(data[temp]);
        if(newRowIndex === 3 || temp === data.length - 1){
            collums.push(rows);
            rows = [];
            newRowIndex = 0;
        }
        newRowIndex++;
        temp++;
        }

        return collums;
    }
    
    const FlexItem = ({item}) => <div className={`${styles.box} ${item ? styles.flex_item : styles.hidden_item}`}>
      <p>
          {item}
      </p>
    </div>
    
    const FlexRow = ({items}) => {
        
        const first_element = items[0] ? items[0].value : null;
        const second_element = items[1] ? items[1].value : null;
        const third_element = items[2] ? items[2].value : null;

        return <div className={styles.flex_row}>
            <FlexItem item={first_element} />
            <FlexItem item={second_element} />
            <FlexItem item={third_element} />
        </div>
    
    }

    const array = getArrayOfRows(props.interests.interests) || [];
    console.log("interests array: ", props)

    return (
        <div className={styles.container}>

            {
                array.map(items => {
                    return <FlexRow key={items[0].key}  items={items} />
                })
            }
        
        </div>
    );
}

export default Interests