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
                <TouchableOpacity onPress={this.props.onPress} style={this.props.jumbo ? styles.containerJumbo : styles.container}>
                    <Text style={this.props.jumbo ? styles.textJumbo : styles.text}>
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

    containerJumbo: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 2,
        backgroundColor: '#0073cf',

        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowRadius: 0,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    text: {
        color: '#328bd2',
        textAlign: 'center',
    },
    textJumbo: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

module.exports = Button;
