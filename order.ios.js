
'use strict';

var React = require('react-native');
var FireBase = require('firebase');
var ReactFireMixin = require('reactfire');
var _ = require('lodash');

var DeliveryMap = require('./deliveryMap.ios');
var DeliveryForm = require('./deliveryForm.ios');

var Invoice = require('./invoice.ios');
var Action  = require('./action.ios');

var styles = require('./order.styles.ios');
var config = require('./config.js');


var {
    View,
    ScrollView,
    LayoutAnimation,
    } = React;

var Order = React.createClass({

    mixins: [ReactFireMixin],

    componentWillMount: function() {
        let ref = new Firebase(config.firebase).child("orders").child(this.props.orderKey);
        this.bindAsObject(ref, "order");
    },

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    },

    onFormComplete: function(options) {
        // Use fake location and time estimate for delivery status
        var deliveryOptions = Object.assign(options, {
            confirmed: true,
            status: {
                estimate: (options.time.earliest + options.time.latest) / 2,
                lon: 60.30756633,
                lat: 24.97501373
            }});
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
                {
                    _.chain(this.state.order.actions)
                    .sortBy(action => -action.date)
                    .map((action, index) => (
                        <Action {...action}
                            service={this.state.order.service.title}
                            highlight={!this.state.order.delivery.active && index === 0} />
                    )).value()
                }
            </ScrollView>
        );
    }

});


module.exports = Order;