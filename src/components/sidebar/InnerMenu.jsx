import React from 'react';
import styles from './Sidebar.module.css';

const InnerMenu = ({tog,settog,lan,setlan}) => {
    return ( 
        <React.Fragment>
                <div onClick={() => {setlan("English"); settog(!tog);}} id={styles.subroute}><a>Hindi <img id={styles.margink} src="https://img.icons8.com/color/35/000000/india.png"/></a></div>
                <div onClick={() => {setlan("English"); settog(!tog);}} id={styles.subroute}><a>English <img id={styles.margink} src="https://img.icons8.com/color/35/000000/usa.png"/></a></div>
                <div onClick={() => {setlan("English"); settog(!tog);}} id={styles.subroute}><a>Spanish <img id={styles.margink} src="https://img.icons8.com/color/35/000000/spain.png"/></a></div>
                <div onClick={() => {setlan("English"); settog(!tog);}} id={styles.subroute}><a>German <img id={styles.margink} src="https://img.icons8.com/color/35/000000/germany.png"/></a></div>
                <div onClick={() => {setlan("English"); settog(!tog);}} id={styles.subroute}><a>French <img id={styles.margink} src="https://img.icons8.com/color/35/000000/france.png"/></a></div>
                <div onClick={() => {setlan("English"); settog(!tog);}} id={styles.subroute}><a>Chinese <img id={styles.margink} src="https://img.icons8.com/color/35/000000/china.png"/></a></div>
                
        </React.Fragment>
     );
}
 
export default InnerMenu;