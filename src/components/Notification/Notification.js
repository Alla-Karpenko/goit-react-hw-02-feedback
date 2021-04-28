import PropTypes from 'prop-types';

const Notification = () => {
    return  <Notification message="No feedback given"/>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;