import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Мои проекты</span>
                <div className={styles.projectsWrapper}>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a href="" className={styles.btnShow}>Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>To do list</span>
                        <span className={styles.description}>Loren ipsum dolor</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a href="" className={styles.btnShow}>Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Social Network</span>
                        <span className={styles.description}>Loren ipsum dolor</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a href="" className={styles.btnShow}>Смотреть</a>
                        </div>
                        <span className={styles.projectTitle}>Zmeyca</span>
                        <span className={styles.description}>Loren ipsum dolor</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;
