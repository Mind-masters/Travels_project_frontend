import styles from "./body.module.css";
import UserPanel from "../userPanel";
import Controllers from "./controllers";
import Comments from "./comments";

const Body = (props) => {


  return (
    <div className={styles.container}>

      <div className={styles.big_screen}>
        <UserPanel user={props.item.user_id} place={props.item} onFilter={props.onFilter} onShowMap={props.onShowMap}/>
      </div>

      <div className={styles.body}>

        <div className={styles.body_description}>
          <p>
            {props.item.description}
          </p>
        </div>

        <Controllers
          item={props.item}
          onShowMap={props.onShowMap}
        />

        <Comments item={props.item} />
      
      </div>

    </div>
  )
}

  export default Body