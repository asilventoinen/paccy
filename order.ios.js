
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
        let deliveryOptions = Object.assign(options, {
            confirmed: true,
            status: {
                estimate: (options.time.earliest + options.time.latest) / 2,
                lat: 60.21978124,
                lon: 24.93535995
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

        let actionHighlighted;
        // TODO: Proper action ids, using date as a key for now
        return (
            <ScrollView contentContainerStyle={styles.wrapper}>
                {headComponent}
                {
                    _.chain(this.state.order.actions)
                    .sortBy(action => -action.date)
                    .map((action, key) => (
                        <Action {...action}
                            key={action.date}
                            service={this.state.order.service.title}
                            highlight={!this.state.order.delivery.active &&
                                       (actionHighlighted ? false : actionHighlighted = true)} />
                    )).value()
                }
            </ScrollView>
        );
    }
});


module.exports = Order;