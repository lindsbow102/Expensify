const moment = require.requireActual('moment');

// Force moment to start at a particular point in time if no time is provided
export default (timestamp = 0) => {
    return moment(timestamp);
};