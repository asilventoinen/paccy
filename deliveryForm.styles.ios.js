'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 100,
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: 1,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5a6269',
    },
    subheading: {
        fontSize: 20,
        color: '#6a7279'
    },
    actionImage: {
        width: 80,
        height: 93,
        margin: 20
    },
});

module.exports = styles;
