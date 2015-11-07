'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    action: {
        alignItems: 'center',
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: 1,
        paddingHorizontal: 25,
        paddingBottom: 25,
    },
    actionMuted: {
        backgroundColor: "#eee",
    },
    actionImage: {
        width: 320,
        height: 281
    },
    header: {
        alignItems: 'center',
        marginTop: 10,
    },
    heading: {
        fontSize: 13,
        color: '#2f88cf',
    },
    headingMuted: {
        fontSize: 12,
        color: '#85bbdf',
    },
    body: {
        textAlign: 'center',
        fontSize: 15,
        color: '#6a7279'
    }
});

module.exports = styles;
