import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./interestsFlex.module.css"


const FlexBox = (props) => {

    const [selectedInterestsArray, setSetectedInterestsArray] = useState(props.existing_data || []);

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
    
    
    
    const FlexItem = ({item}) => {
    
        const ItemClickHandler = () => {

            const doesItemExists = selectedInterestsArray.filter(element => element === item).length>0;

            if(!doesItemExists)setSetectedInterestsArray([...selectedInterestsArray, item])
            else{
                setSetectedInterestsArray(
                    selectedInterestsArray.filter(element => {
                        return element !== item
                    })
                )
            }

        }

        const isSelected = selectedInterestsArray.filter(interest => interest === item) ;

    
        return <div onClick={ItemClickHandler} className={`${styles.box} ${item ? styles.flex_item : styles.hidden_item} ${isSelected[0] && styles.flex_item_selected}`}>
            <p>
                {item}
            </p>
        </div>
    }
    
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

    const array = getArrayOfRows(props.data);

    useEffect(() => {
        props.onChangeState(selectedInterestsArray);
    })

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

export default FlexBox;