import { useEffect } from 'react';
import styles from '../styles/mainpage.module.css';

export default function MainPage(){

    // useEffect(()=>{
        

    // },[])


    return (
        <div>
            <div className={styles.box}>
                <div className={styles.name}> Seungjoo Lee</div>
                <div className={styles.job}>Software Developer</div>
            </div>

            <div className={styles.box2}>
                <div className={styles.name}>SKILLS</div>
                <div className={styles.techs}>
                    <div><img className={styles.techLogo}src="images/html_logo.png" alt="html" /><div className={styles.techName}>HTML</div></div>
                    <div><img className={styles.techLogo}src="images/css_logo.png" alt="css" /><div className={styles.techName}>CSS</div></div>
                    <div><img className={styles.techLogo}src="images/js_logo.png" alt="js" /><div className={styles.techName}>JavaScript</div></div>
                    <div><img className={styles.techLogo}src="images/ts_logo.png" alt="ts" /><div className={styles.techName}>TypeScript</div></div>
                    <div><img className={styles.techLogo}src="images/c_logo.png" alt="c" /><div className={styles.techName}>C</div></div>
                    <div><img className={styles.techLogo}src="images/python_logo.png" alt="python" /><div className={styles.techName}>Python</div></div>
                    <div><img className={styles.techLogo}src="images/java_logo.png" alt="java" /><div className={styles.techName}>Java</div></div>
                    <div><img className={styles.techLogo}src="images/react_logo.png" alt="react" /><div className={styles.techName}>React</div></div>
                </div>
            </div>
        </div>
    )
}