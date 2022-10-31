import React, { useEffect, useState } from 'react'

// Logos
import logo from "../../../assets/logo.PNG"
import close_logo from "../../../assets/close-logo.png"


// Styles
import default_styles from "./default_modal_styles.module.css";
import custom_styles from "./selectUserInterests.module.css";


const SelectUserInterests = (props) => {

    const [selectedInterests, setSelectedInterests] = useState([]);
    const [clickedInterest, setClickedInterest] = useState(null);


    const CUSTOM_COLORS = [
        "#3ECEFA",
        "#F3DE1B",
        "rgba(255, 0, 0, 1)"
    ];


    useEffect(() => {

        if(!clickedInterest) return ;

        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        const newInterest = {...clickedInterest, color: randomColor}; 

        const doesItemExists = selectedInterests.filter(item => item.key === newInterest.key).length>0;

        if(!doesItemExists)setSelectedInterests([...selectedInterests, newInterest])
        else{
            setSelectedInterests(
                selectedInterests.filter(item => {
                    return item.key !== newInterest.key
                })
            )
        }


    }, [clickedInterest])


    const submitHandler = () => {
        if(selectedInterests.length > 2)
        props.onSubmit(selectedInterests)
    }


    const DEFAULT_OPTIONS = [
        {key: 1, value: "Scary places"},
        {key: 2, value: "Town"},
        {key: 3, value: "trip by car"},
        {key: 4, value: "Mysteryous places"},
        {key: 5, value: "Hills"},
        {key: 6, value: "Forrest"},
        {key: 7, value: "Culture"},
        {key: 8, value: "Bed and Breakfasts"},
        {key: 9, value: "Hotels"},
        {key: 10, value: "Caravanning"},
        {key: 11, value: "Camping"},
        {key: 12, value: "Exotic places"},
        {key: 13, value: "Abandoned places"},
        {key: 14, value: "Geocaching"},
        {key: 15, value: "Photography"},
        {key: 16, value: "Natural"},
        {key: 17, value: "Romantic"},
    ]

  return (
    <div className={default_styles.modal_content}>

            <div className={default_styles.top_menu_container}>
                <img className={default_styles.hidden_logo} src={close_logo} alt="hidden" />
                <img className={default_styles.logo} src={logo} alt="logo" />
                <img className={default_styles.close_logo} src={close_logo} alt="close" />
            </div>

            <div className={default_styles.about_container}>
                <h1>Interests</h1>
                <p>Pick 3 or more things you'd like to see and explore</p>
            </div>

            <div className={custom_styles.scroll_container}>
                {
                    DEFAULT_OPTIONS.map(
                        option => {
                            const isSelected = selectedInterests.filter(interest => interest.key === option.key)

                            return <button 
                                key={option.key} 
                                style={{ backgroundColor: isSelected.length>0 ? isSelected[0].color :  "rgba(188, 188, 188, 0.396)"}}  
                                onClick={() => setClickedInterest(option) }
                            >
                                {option.value}
                            </button> 
                        }
                        
                        
                    )
                }
            </div>

            <div className={`${custom_styles.button_container} ${selectedInterests.length>2 && custom_styles.activate_btn}`}>
                <button onClick={submitHandler}>
                    Continue
                </button>
            </div>

        </div>

  )
}

export default SelectUserInterests