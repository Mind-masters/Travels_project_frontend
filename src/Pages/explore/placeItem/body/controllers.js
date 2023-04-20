import React, {useState, useContext} from 'react'
import styles from "./controllers.module.css";
import Like from '../../../../components/shared/UI/Ratings/like';
import Button from "../../../../components/shared/UI/button/Button";
import { AuthContext } from '../../../../contextAPI/AuthContext';
import ViewOnMap from "../../../../components/shared/UI/viewOnMap";
import map_icon from "../../../../assets/map_icon.png";
import commentsLogo from "../../../../assets/comments_logo.png";



const Controllers = (props) => {


    const [showMapModal, setShowMapModal] = useState(false);
    const User = useContext(AuthContext);

    const [likesCount, setLikesCount] = useState(props.item ? (props.item.likes ? props.item.likes.length : 0) : 0);

    const CloseMapModal = () => {
        setShowMapModal(false);
    }


    return (
        <div style={{ padding: props.padding }} className={styles.container}>

            { ((props.onLike || props.onComment) && props.pid) &&
                <div className={props.onComment ? styles.like_comment_icons : styles.like_icon}>
                    { props.onLike &&
                        <div className={styles.like_icon}>
                            <Like pid={props.pid} count={2} onClick={props.onLike} user={User.authenticatedUser} isLiked={props.isLiked}/>
                        </div>
                    }

                    { props.onComment &&
                        <div className={styles.comment_icon}>
                            <img onClick={props.onComment} className={styles.comments_logo} src={commentsLogo} alt="" />
                        </div>
                    }
                </div>
            }


            {   props.likes && 
                <div className={styles.likes}>
                    <p>
                        {
                        props.likes && ( props.likes > 1 ? `${props.likes} likes` : `${props.likes} like` )
                        }
                    </p>
                </div>
            }

            {   props.timeline && 
                <div className={styles.likes}>
                    <p>
                        2 mins ago
                    </p>
                </div>
            }

            { props.map && 
                <div className={styles.map}>
                    <Button height={35} onSubmit={() => {setShowMapModal(true)}}>
                        <div className={styles.map_content}>
                            <img src={map_icon} alt="" />
                            <h1 style={{ color: "white" }}>View on map</h1>
                        </div>
                    </Button>
                </div>
            }

        </div>
    )
}

export default Controllers