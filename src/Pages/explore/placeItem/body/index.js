import styles from "./body.module.css";
import UserPanel from "../userPanel";
import Controllers from "./controllers";
import Comments from "./comments";

const Body = ({item}) => {


  return (
    <div className={styles.container}>

      <div className={styles.big_screen}>
        <UserPanel user={item.user_id} />
      </div>

      <div className={styles.body}>

        <div className={styles.body_description}>
          <p>
            {item.description}
          </p>
        </div>

        <Controllers
          item={item}
        />

        <Comments item={item} />
      
      </div>

    </div>
  )
}

  export default Body