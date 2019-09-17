import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Мои скиллы</span>
                <div className={styles.skillWrapper}>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>HTML</span>
                        <span className={styles.description}>I</span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>JS</span>
                        <span className={styles.description}>I</span>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.icon}>
                            <img src="" alt=""/>
                        </div>
                        <span className={styles.skillTitle}>React</span>
                        <span className={styles.description}>I</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
