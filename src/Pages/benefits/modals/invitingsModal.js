import React, { useState } from 'react'
import { MdGroups } from 'react-icons/md';
import BenefitsModalHeader from './header';
import styles from "./invitings.module.css";
import FormInput from "../../../components/shared/UI/formInput";
import Button from '../../../components/shared/UI/button/Button';

const InvitingsModal = (props) => {

    const [emailValue, setEmailValue] = useState("");

    const onSubmitHandler = () => {
        console.log("submited")
        // props.onSubmit(emailValue);
    };

  return (
    <>
        <BenefitsModalHeader header="Get Points By Inviting Your Friends">
            <MdGroups />
        </BenefitsModalHeader>

        <div className={styles.list_container}>
            <div className={styles.subheader}>
                <p style={{ lineHeight:"normal" }}>Don't miss opportunity to earn extra rewards and enhance your experience on our platform. Start inviting your friends today and unlock a world of possibilities!</p>
            </div>

            <div className={styles.card}>
                <div className={styles.enter_email}>
                    <h1>Enter your friend's email address:</h1>
                    <div className={styles.card_input}>
                        <FormInput value={emailValue} onChange={(inp)=>setEmailValue(inp)} name="email" isValid={true}>
                            <div style={{ padding:"5px" }} />
                        </FormInput>
                    </div>
                    <div className={styles.card_btn}>
                        <Button height="auto" color="#F08D32">
                            <h1>Invite</h1>
                        </Button>
                    </div>
                </div>
                <p className={styles.note}>
                    <span>Note</span>
                    Please make sure your friends enter this email address when signing up so you can get bonus points.
                </p>          
                <p className={styles.footer}>

                </p>
            </div>
        </div>
    </>
)
}

export default InvitingsModal