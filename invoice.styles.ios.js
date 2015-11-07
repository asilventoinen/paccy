'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    invoice: {
        padding: 40,
    },
    buttonWrapper: {
        alignItems: 'center'
    },
    header: {
        alignItems: 'center',
        margin: 10,
    },
    headerText: {
        fontSize: 15,
        color: '#2697d7',
    },
    mutedText: {
        color: '#444'
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#d2d5d7',
        marginTop: 10,
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        margin: 10
    }

});

module.exports = styles;
