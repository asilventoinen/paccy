'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        paddingBottom: 80,
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: 1,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#006fc8',
    },
    subheading: {
        fontSize: 18,
        color: '#323e47',
    },
    footer: {
        fontSize: 12,
        color: '#006fc8',
        opacity: 0.8,
        paddingVertical: 10
    },
    actionImage: {
        width: 320,
        height: 247,
        marginBottom: -50
    },
    select: {
        marginVertical: 5,
    },
    button: {
        marginVertical: 15
    }
});

module.exports = styles;
