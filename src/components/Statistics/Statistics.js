import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return <div>
        <h2 className={styles.statistics}>Statistics</h2>
        { total === 0 ? <h2 className={styles.Notification}>No feedback given</h2>  : (
        <div>
            <span className={styles.feedbackStatistics}>Good: {good}</span>       
            <span className={styles.feedbackStatistics}>Neutral: {neutral}</span>       
            <span className={styles.feedbackStatistics}>Bad: {bad}</span>        
            <span className={styles.feedbackStatistics}>Total: {total > 0 ? total : 0 }</span>
            <span className={styles.feedbackPositive}>Positive feedback: {positivePercentage > 0 ? positivePercentage : 0}%</span>
        </div> 
         )}
    </div>
   
};
export default Statistics;