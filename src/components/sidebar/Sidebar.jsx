import React, {useState,useEffect} from 'react';
import styles from './Sidebar.module.css';
import English from './English';
import InnerMenu from './InnerMenu';

const Sidebar = (props) => {
    const [tog,setTog] = useState(true);

    const [lan,setLan] = useState("English");

    return ( 
        <div className={styles.container}>
            <div  className={styles.inner}>
                <div id={styles.nostyles}> 
                    <div id={styles.subroute}>
                        <a onClick={()=>setTog(!tog)}>{lan}</a>
                        <a onClick={props.wierd} id={styles.hovers}>Close<img id={styles.margink} src="https://img.icons8.com/ios-filled/35/000000/multiply.png"/></a> 
                    </div>
                </div>

                {
                    tog ? 
                        <English/> : <InnerMenu tog={tog} settog={setTog} lan={lan} setlan={setLan}/>
                }  
            </div>
        </div>
     );
}
 
export default Sidebar;