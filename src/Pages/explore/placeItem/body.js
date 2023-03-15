import styles from "./body.module.css";
import Button from "../../../components/shared/UI/button/Button";
import Like from '../../../components/shared/UI/Ratings/like';
import FormInput from '../../../components/shared/UI/formInput';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import commentsLogo from "../../../assets/comments.png";
import map_icon from "../../../assets/map_icon.png";
import ViewOnMap from "../../../components/shared/UI/viewOnMap";

const Body = ({item}) => {

  const item_author = item.user_id ? item.user_id : "Unknown user"
  const User = useContext(AuthContext);
  const token = User.isLoggedIn ? User.authenticatedUser.token.access_token : null
  const [isLiked, setIsLiked] = useState(User.authenticatedUser && (item.likes && item.likes.includes(User.authenticatedUser.data.id)));

  const [likesCount, setLikesCount] = useState(item.likes ? item.likes.length : 0);
  const [commentsCount, setCommentsCount] = useState(item.comments ? item.comments.length : 0);
  const [showMapModal, setShowMapModal] = useState(false);
  const [commentValue, setCommentValue] = useState(null);

  const onLikeClickHandler = () => {
    setLikesCount(!isLiked ? likesCount + 1 : likesCount - 1);
    setIsLiked(!isLiked)
  }

  const onCommentSubmitHandler = async() => {

    if(!commentValue)return
    setCommentValue("")

    setCommentsCount(commentsCount + 1);

    const create_new_comment = await Comment(
      {
        text: commentValue,
        pid: item._id
      },
      token
    )

    if(!create_new_comment.status){
      return
      setCommentValue(commentValue--);
    }


    console.log("create_new_comment: ", create_new_comment)

  }

  const CloseMapModal = () => {
    setShowMapModal(false);
  }

  console.log("item: ", item)

  return (
    <div className={styles.container}>

      <div className={styles.user_panel}>
        
        <div className={styles.flex_item}>
          <img src={"https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription01&hatColor=Blonde&facialHairType=Black&clotheType=BlazerSweater&clotheColor=Heather&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=Light"} alt="" />
        </div>
        
        <div className={styles.flex_item}>
          <div className={styles.profile_btn}>
            <Button height={35}>
              <h1 style={{ color: "white" }}>Profile</h1>
            </Button>
          </div>
        </div>

        <div className={styles.flex_item}>
          <div className={styles.client_dropdown}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>

      <div className={styles.description_comments_panel}>
        <p>
          {item.description}
        </p>
      </div>

      <div className={styles.controll_panel}>
        <div className={styles.likes_map}>
          <Like pid={item._id} count={2} onClick={onLikeClickHandler} user={User.authenticatedUser} isLiked={false}/>
          <div className={styles.map}>
            <Button height={35} onSubmit={() => {setShowMapModal(true)}}>
              <img src={map_icon} alt="" />
              <h1 style={{ color: "white" }}>Open map</h1>
            </Button>
          </div>
        </div>

        <div className={styles.comments}>
          
          <FormInput name="Add a comment..." value={commentValue} isValid={true} no_errors={true} onChange={(val)=>{setCommentValue(val)}} />
          <img src={commentsLogo} alt="" onClick={onCommentSubmitHandler} />
        </div>
      </div>

    </div>
  )
}

export default Body