import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет</span>
                    <span>Я Евгений <span>Химач</span></span>
                    <h1>Я Front-End Developer</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
