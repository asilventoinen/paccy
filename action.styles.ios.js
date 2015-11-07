'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    action: {
        alignItems: 'center',
        borderBottomColor: "#dbdbdb",
        borderBottomWidth: 1,
        paddingHorizontal: 40,
        paddingTop: 15,
        paddingBottom: 30,
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
    },
    heading: {
        fontSize: 12,
        color: '#006fc8',
        opacity: 0.9
    },
    headingMuted: {
        fontSize: 12,
        fontWeight: "300",
        color: '#0085d2',
        opacity: 0.6
    },
    body: {
        textAlign: 'center',
        fontSize: 15,
        color: '#6a7279',
        marginVertical: 5,
    }
});

module.exports = styles;
