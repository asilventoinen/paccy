'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    map: {
        height: 330 // TODO: Find something better for landscape etc.
    },
    menu: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 15,
        paddingBottom: 30,

        borderColor: "#dbdbdb",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    body: {
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 5,
        color: '#6a7279',
    },
    emphasized: {
        fontWeight: 'bold',
    },
    footer: {
        marginHorizontal: 50,
        marginVertical: 5,
        textAlign: 'center',
        fontSize: 12,
        color: '#6a7279'
    },

    buttonRow: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    buttonWrapper: {
        borderWidth: 1,
        borderColor: '#f00',
        margin: 5,
        padding: 5
    }
});

module.exports = styles;
