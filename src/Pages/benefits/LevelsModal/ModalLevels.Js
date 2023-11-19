import React from 'react'
import levelsHeader from './levelsHeader';
import LevelsCrown from'../../../assets/benefits/beginner.png';

const ModalLevels = (props) => {
    const navigate = useNavigate();

  return (
    <>
      <levelsHeader header= "Choose A Level">
        <img src={LevelsCrown} alt='levels'/>
        </levelsHeader> 

        <div className={styles.list_container}>
               <h1>Levels</h1>

                <div className={styles.list_btn}>
                    {/* <Button onSubmit={()=>navigate("/")} height="auto" color="#F08D32">
                        
                    </Button> */}
                </div>
                
            </div>
    </>
  )
}

export default ModalLevels