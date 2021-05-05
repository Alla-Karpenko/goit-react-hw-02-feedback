import { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/Feedback';
import Section from './components/Section';


import './styles.module.css';
    class App extends Component {
       
        state = {
            good: 0,
            neutral: 0,
            bad: 0
        };
        
        onLeaveFeedback = (event) => {
            const option = event.target.name;
            this.setState(prevState => {
               return { [option]: prevState[option] + 1
            }});
        }
    
        countTotalFeedback = () => {
            return Object.values(this.state).reduce((acc, stat) => {
                acc += stat;
                return acc;
            }, 0);
        };
    
        countPositiveFeedbackPercentage = () => {
            const sumFeedback = this.countTotalFeedback();
            const { good } = this.state
           const feedbackPercentage = (good * 100) / sumFeedback;
           return Math.round(feedbackPercentage);
        }
    
        render() {
           const { good, neutral, bad } = this.state;
           const total = this.countTotalFeedback();
           const options = Object.keys(this.state)

            return (
                
                <div>
                    <Section title="Please leave feedback">
                    
                      <FeedbackOptions 
                        options={options} 
                        onLeaveFeedback={this.onLeaveFeedback}
                      />   
                       
                        <Statistics 
                            good={good} 
                            neutral={neutral} 
                            bad={bad} 
                            total={total} 
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        /> 
                    </Section>
                </div>   
               
              
            );
        }
    }

export default App;