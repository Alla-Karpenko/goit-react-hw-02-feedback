import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
   <div>
        {options.map(( option, id ) => {
           return <button className={styles.btn} key={id} type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
        })}   
    </div> 
)

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;