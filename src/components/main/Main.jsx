import React from 'react';
import styles from './Main.module.css';

const Main = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>

                <div className={styles.menu}>
                    <div className={styles.left}>
                        <h1 className={styles.leftbold}><a style={{textDecoration: "none", color: "#000000"}} href="#">{props.head1}</a> </h1>
                        <h1 className={styles.rightlight}>{props.headsub1}</h1>
                    </div>                   
                    <div className={styles.left}>
                        <h1 className={styles.leftbold}><a style={{textDecoration: "none", color: "#000000"}} href="#">{props.head2}</a></h1>
                        <h1 className={styles.rightlight}>{props.headsub2}</h1>
                    </div>
                </div>

                <div className={styles.grid}>
                
                    <div className={styles.item}>
                        <div className={styles.itemin}>
                            <div className={styles.capim}>
                                <img src="https://dummyimage.com/600x400/000/fff" alt=""/>
                            </div>

                            <div className={styles.capco}>
                                <h4 className={styles.header1}>Hanzo</h4>
                                <h4 className={styles.header2}>From the Spain</h4>
                            </div>

                            <div className={styles.captags}>
                                <div className={styles.logos}>
                                    BY HANZO
                                </div>

                                <div className={styles.tags}>
                                    <div className={styles.color1}>SOTD</div>
                                    <div className={styles.color2}>HM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemin}>
                            <div className={styles.capim}>
                                <img src="https://dummyimage.com/600x400/000/fff" alt=""/>
                            </div>

                            <div className={styles.capco}>
                                <h4 className={styles.header1}>Hanzo</h4>
                                <h4 className={styles.header2}>From the Spain</h4>
                            </div>

                            <div className={styles.captags}>
                                <div className={styles.logos}>
                                    BY HANZO
                                </div>

                                <div className={styles.tags}>
                                    <div className={styles.color1}>SOTD</div>
                                    <div className={styles.color2}>HM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemin}>
                            <div className={styles.capim}>
                                <img src="https://dummyimage.com/600x400/000/fff" alt=""/>
                            </div>

                            <div className={styles.capco}>
                                <h4 className={styles.header1}>Hanzo</h4>
                                <h4 className={styles.header2}>From the Spain</h4>
                            </div>

                            <div className={styles.captags}>
                                <div className={styles.logos}>
                                    BY HANZO
                                </div>

                                <div className={styles.tags}>
                                    <div className={styles.color1}>SOTD</div>
                                    <div className={styles.color2}>HM</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.itemin}>
                            <div className={styles.capim}>
                                <img src="https://dummyimage.com/600x400/000/fff" alt=""/>
                            </div>

                            <div className={styles.capco}>
                                <h4 className={styles.header1}>Hanzo</h4>
                                <h4 className={styles.header2}>From the Spain</h4>
                            </div>

                            <div className={styles.captags}>
                                <div className={styles.logos}>
                                    BY HANZO
                                </div>

                                <div className={styles.tags}>
                                    <div className={styles.color1}>SOTD</div>
                                    <div className={styles.color2}>HM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      );
}
 
export default Main;