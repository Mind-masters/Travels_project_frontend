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
                        <h1>Uploads</h1>
                    </div>
                    <div>
                        <p>Get 4 bonus points</p>
                    </div>
                </div>

                <div className={styles.list_item}>
                    <div className={styles.points_item_header}>
                        <span />
                        <h1>Donations</h1>
                    </div>
                    <div>
                        <p>Get 2, 5 or 10 bonus points from people who supports you</p>
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