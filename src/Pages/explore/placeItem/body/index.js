import styles from "./body.module.css";
import UserPanel from "../userPanel";
import Controllers from "./controllers";
import Comments from "./comments";

const Body = (props) => {


  return (
    <div className={styles.container}>

      <div className={styles.body}>


        <Controllers
          item={props.item}
          onShowMap={props.onShowMap}
        />

        {/* <Comments item={props.item} /> */}
      
      </div>

    </div>
  )
}

  export default Body