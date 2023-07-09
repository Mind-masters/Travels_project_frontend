import React from 'react'
import BenefitsModalHeader from "./header";
import { AiFillHeart } from 'react-icons/ai';
import styles from "./modals.module.css";
import Button from "../../../components/shared/UI/button/Button";
import { useNavigate } from 'react-router-dom';

const LikesModal = (props) => {
    const navigate = useNavigate();


    return (
        <>
            <BenefitsModalHeader header="Get Points with Likes">
                <AiFillHeart />
            </BenefitsModalHeader>

            <div className={styles.list_container}>
                <div className={styles.list_item}>
                    <div className={styles.points_item_header}>
                        <span />
                        <h1>More than 10 likes</h1>
                    </div>
                    <div>
                        <p>Get 5 bonus points</p>
                    </div>
                </div>

                <div className={styles.list_item}>
                    <div className={styles.points_item_header}>
                        <span />
                        <h1>More than 30 likes</h1>
                    </div>
                    <div>
                        <p>Get 10 bonus points</p>
                    </div>
                </div>

                <div className={styles.list_item}>
                    <div className={styles.points_item_header}>
                        <span />
                        <h1>More than 50 likes</h1>
                    </div>
                    <div>
                        <p>Get 15 bonus points</p>
                    </div>
                </div>

                <div className={styles.list_item}>
                    <div className={styles.points_item_header}>
                        <span />
                        <h1>More than 100 likes</h1>
                    </div>
                    <div>
                        <p>Get unlimited bonus points for one week</p>
                    </div>
                </div>

                <div className={styles.list_btn}>
                    <Button onSubmit={()=>navigate("/uploads")} height="auto" color="#F08D32">
                        <h1 style={{ color: "white", padding: "10px 5px" }}>
                            Share place
                        </h1>
                    </Button>
                </div>

                <div style={{ marginLeft: "1rem" }} className={styles.list_btn}>
                    <Button onSubmit={props.onClose} height="auto" color="#e82c5b">
                        <h1 style={{ color: "white", padding: "10px 5px" }}>
                            Close
                        </h1>
                    </Button>
                </div>
                
            </div>

        </>
    )
}

export default LikesModal