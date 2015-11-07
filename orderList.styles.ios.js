'use strict';

var React = require('react-native');

var { StyleSheet } = React;

var styles = StyleSheet.create({
    list: {
        backgroundColor: '#fbfafb',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#fafafa',
    },
    itemLogo: {
        width: 35,
        height: 41,
        marginHorizontal: 20,
        backgroundColor: 'transparent',
    },
    itemInfo: {
        flex: 1,
        flexDirection: 'column',
    },
    itemInfoHeader: {
        fontSize: 17,
        paddingBottom: 5,
    },
    itemInfoFooter: {
        fontSize: 12,
        color: '#555'
    },
});

module.exports = styles;


