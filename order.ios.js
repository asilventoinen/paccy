
'use strict';

var React = require('react-native');
var FireBase = require('firebase');
var ReactFireMixin = require('reactfire');

var DeliveryMap = require('./deliveryMap.ios');
var DeliveryForm = require('./deliveryForm.ios');

var Invoice = require('./invoice.ios');
var Action  = require('./action.ios');

var styles = require('./order.styles.ios');
var config = require('./config.js');


var {
    View,
    ScrollView
    } = React;

var Order = React.createClass({

    mixins: [ReactFireMixin],

    componentWillMount: function() {
        let ref = new Firebase(config.firebase).child("orders").child(this.props[".key"]);
        this.bindAsObject(ref, "order");
    },

    onFormComplete: function(deliveryOptions) {
        deliveryOptions.confirmed = true;
        this.firebaseRefs['order'].child("delivery").update(deliveryOptions);
    },

    render: function() {
        let headComponent;
        if(this.state.order.delivery.active) {
            headComponent = this.state.order.delivery.confirmed ? <DeliveryMap {...this.state.order.delivery} /> :
                                                                  <DeliveryForm onComplete={this.onFormComplete} />
        } else {
            headComponent = <Invoice {...this.state.order.invoice} />
        }

        return (
            <ScrollView contentContainerStyle={styles.wrapper}>
                {headComponent}
                {this.props.actions
                    .sort((a, b) => a.date < b.date)
                    .map((action, index) => (
                        <Action {...action}
                            service={this.state.order.service.title}
                            highlight={!this.props.delivery.active && index === 0} />
                ))}
            </ScrollView>
        );
    }

});


module.exports = Order;