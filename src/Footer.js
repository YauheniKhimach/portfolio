import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Евгений Химач</span>
                <div className={styles.socialBlock}>
                    <div className={styles.socialIcon}></div>
                    <div className={styles.socialIcon}></div>
                    <div className={styles.socialIcon}></div>
                    <div className={styles.socialIcon}></div>
                </div>
                <span className={styles.copyright}>@2019 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
