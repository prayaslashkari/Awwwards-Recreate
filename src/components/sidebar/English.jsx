import React from 'react';
import styles from './Sidebar.module.css';

const English = () => {
    return ( 
        <React.Fragment>
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
        </React.Fragment>
     );
}
 
export default English;