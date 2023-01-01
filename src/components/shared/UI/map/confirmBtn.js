
import Styles from './confirmBtn/Confirmbtn.module.css'
import ImageExlam from '../../../../assets/exclamation_mark.png';

const ConfirmBtn= () => {
  
  return (
    <div className={Styles.container}>
            <h2 className={Styles.approved}>Approved</h2>
            <img className={Styles.exclamation} src={ImageExlam} alt=""></img>
            <p className={Styles.review}>This review is rated: -3 Points</p>
            <div className={Styles.modelcard}>
            <button className={Styles.BtnDanger}>
            <span className={Styles.No}>Cancel</span>
            </button>
            <button className={Styles.BtnSuccess}>
            <span className="Yes">Go!</span>
            </button>
            </div>
        </div>
  )
}

export default ConfirmBtn