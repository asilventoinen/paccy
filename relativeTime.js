'use strict';

var React = require('react-native');
var moment = require('moment');

var { Text } = React;

var RelativeTime = React.createClass({

    getRelativeTime: function() {
        return moment.unix(this.props.timestamp).fromNow();
    },

    getInitialState: function() {
        return {
            time: this.getRelativeTime()
        };
    },

    componentWillMount: function() {
        this.timer = setInterval(this.getRelativeTime, 1000);
    },

    componentWillUnmount() {
        clearInterval(this.timer);
    },

    render: function () {
        return (
            <Text>{this.state.time}</Text>
        );
    }

});

module.exports = RelativeTime;
