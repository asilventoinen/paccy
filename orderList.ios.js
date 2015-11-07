
'use strict';

var React = require('react-native');
var FireBase = require('firebase');
var ReactFireMixin = require('reactfire');

var Order =  require('./order.ios');

var styles = require('./orderList.styles.ios');
var config = require('./config.js');

var {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    LayoutAnimation,
    } = React;

var packImages = [
    require("image!Pack0"),
    require("image!Pack1"),
    require("image!Pack2"),
    require("image!Pack3"),
    ];


var OrderListItem = React.createClass({
    render: function() {
        let image = packImages[this.props.order.service.themeId];
        if(!image) image=packImages[0];

        return (
            <TouchableOpacity style={styles.item} onPress={this.props.onPress}>
                <Image style={styles.itemLogo} source={image} />
                <View style={styles.itemInfo}>
                    <Text style={styles.itemInfoHeader}>
                        {this.props.order.service.title}
                    </Text>
                    <Text style={styles.itemInfoFooter}>
                        {this.props.order.invoice.items.length} items - {this.props.order.invoice.total.toFixed(2)} €
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
});


var OrderList = React.createClass({

    mixins: [ReactFireMixin],

    componentWillMount: function() {
        var ref = new Firebase(config.firebase).child("orders");
        this.bindAsArray(ref, "orders");
    },

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    },

    onPress: function(order) {
        this.props.navigator.push({
            backButtonTitle: "Back",
            title: order.service.title,
            component: Order,
            passProps: {orderKey: order[".key"]}
        });
    },


    render: function() {
        return (
            <ScrollView style={styles.list}>
                { this.state.orders
                    .slice()
                    .reverse()
                    .map((order, i) => (
                        <OrderListItem order={order} key={order[".key"]} onPress={this.onPress.bind(this, order)} />
                    ))

                }
            </ScrollView>
        );
    }

});

module.exports = OrderList;