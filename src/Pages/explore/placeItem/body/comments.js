import React,{ useContext, useState } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import FormInput from '../../../../components/shared/UI/formInput';
import submitCommentLogo from "../../../../assets/comments.png";
import styles from "./comments.module.css";
import commentsLogo from "../../../../assets/comments.png";
import Like from '../../../../components/shared/UI/Ratings/like';


const Comments = ({item}) => {

  const item_author = item.user_id ? item.user_id : "Unknown user"
  const User = useContext(AuthContext);
  const token = User.isLoggedIn ? User.authenticatedUser.token.access_token : null
  const [commentValue, setCommentValue] = useState(null);
  const [commentsCount, setCommentsCount] = useState(item.comments ? item.comments.length : 0);


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
    }


    console.log("create_new_comment: ", create_new_comment)
  
  }

  const DUMMY_DATA = [
    {
      avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=ScreamOpen&skinColor=DarkBrown",
      content: "obs fill your pockets, adventures fill your soul."
    },

    {
      avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Blank&hairColor=Platinum&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Close&eyebrowType=Angry&mouthType=Grimace&skinColor=Black",
      content: "Remember that happiness is a way of travel"
    },

    {
      avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Smile&skinColor=Tanned",
      content: "Travel is the only thing you buy"
    },

    // {
    //   avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFro&accessoriesType=Wayfarers&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=White&graphicType=Selena&eyeType=EyeRoll&eyebrowType=SadConcernedNatural&mouthType=Grimace&skinColor=Light",
    //   conten: "create_new_comment 4"
    // },

    // {
    //   avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=Auburn&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Side&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Yellow",
    //   conten: "create_new_comment 5"
    // }
  ]


  return (
    <div className={styles.container}>
      <div className={styles.comments_list}>
        {DUMMY_DATA.map(comment => (
          <div className={styles.comment_item}>
            <img src={comment.avatar} alt="avatar" />
            {comment.content.substring(0, 5)}
          </div>
        ))}
      </div>

      <div style={{ color: "rgba(240, 175, 115, 1)", fontSize: "1.3rem" }}>View all comment</div>

      <div className={styles.controll_panel}>
        <FormInput name="Add a comment..." value={commentValue} isValid={true} no_errors={true} onChange={(val)=>{setCommentValue(val)}} />
        <img src={commentsLogo} alt="" onClick={onCommentSubmitHandler} />
      </div>
    </div>
  )
}

export default Comments