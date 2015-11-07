'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    } = React;


var Button = React.createClass({

    render: function () {
        return (
                <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                    <Text style={styles.text}>
                        {this.props.children}
                    </Text>
                </TouchableOpacity>
        );
    }

});

var styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#0073cf',
    },
    text: {
        color: '#328bd2',
        textAlign: 'center',
    }
});

module.exports = Button;
