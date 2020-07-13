import React, {useState,useEffect} from 'react';
import styles from './Sidebar.module.css';

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
                        <>
                            <div><a href="#">Register / Log in</a> </div>
                            <div><a href="#">Home</a> </div>
                            <div><a href="#">Winners</a> </div>
                            <div><a href="#">Nominees</a></div>
                            <div><a href="#">Collections</a> </div>
                            <div><a href="#">Register / Log in</a></div>
                            <div className={styles.highlight}><a href="#">Academy <span className={styles.betahighlight}>BETA</span></a></div>
                            <div><a href="#">Professional directory</a></div>
                            <div><a href="#">Jobs & Talent</a> </div>
                            <div><a href="#">Blog</a> </div>
                            <div><a href="#">ebooks & Publication</a> </div>
                            <div><a href="#">About us</a></div>
                            <div id={styles.conference}><a href="#">Conferences</a><span id={styles.topy}>Toronto / Cancelled</span><span>San Francisco / Cancelled</span></div>
                        </> : 
                        <>
                            <div onClick={() => {setLan("English"); setTog(!tog);}} id={styles.subroute}><a>English <img id={styles.margink} src="https://img.icons8.com/color/35/000000/andorra.png"/></a></div>
                            <div onClick={() => {setLan("Hindi"); setTog(!tog);}} id={styles.subroute}><a id={styles.margink}>Hindi <img id={styles.margink} src="https://img.icons8.com/color/35/000000/andorra.png"/></a> </div>
                            <div onClick={() => {setLan("Spanish"); setTog(!tog);}} id={styles.subroute}><a id={styles.margink}>Espanol-Spanish<img id={styles.margink} src="https://img.icons8.com/color/35/000000/andorra.png"/></a> </div>
                            <div onClick={() => {setLan("Korean"); setTog(!tog);}} id={styles.subroute}><a id={styles.margink}>Korean <img id={styles.margink} src="https://img.icons8.com/color/35/000000/andorra.png"/></a></div>
                            <div onClick={() => {setLan("Japanese"); setTog(!tog);}} id={styles.subroute}><a id={styles.margink}>Japanese <img id={styles.margink} src="https://img.icons8.com/color/35/000000/andorra.png"/></a> </div>
                            <div onClick={() => {setLan("Gujarati"); setTog(!tog);}}  id={styles.subroute}><a id={styles.margink}>Gujarati <img id={styles.margink} src="https://img.icons8.com/color/35/000000/andorra.png"/></a></div>
                        </>
                }
                
            </div>
        </div>
     );
}
 
export default Sidebar;