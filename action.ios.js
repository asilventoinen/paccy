
'use strict';

var React = require('react-native');
var Button = require('./button.ios');
var RelativeTime = require('./relativeTime');

var styles = require('./action.styles.ios');

var {
    View,
    TouchableOpacity,
    Text,
    LayoutAnimation,
    Image
    } = React;

var actionImages = {
    orderReceived: require("./images/ActionOrderReceived.png"),
    orderSent: require("./images/ActionOrderSent.png"),
    preparingDelivery: require("./images/ActionPreparingDelivery.png"),
    orderDelivered: require("./images/ActionOrderDelivered.png")
};

var Action = React.createClass({

    getDescription: function() {
        let description;
        switch (this.props.type) {
            case 'orderReceived':
                description = `${this.props.service} has received your order. Your package will be sent your way soon.`;
                break;
            case 'orderSent':
                description = `Your package has left the ${this.props.service} headquarters and is now heading your way.`;
                break;
            case 'preparingDelivery':
                description = `Your package has arrived and is being prepared to be delivered.`;
                break;
            case 'orderDelivered':
                description = `Your package was delivered. Hope you are enjoying your new stuff!`;
                break;
            default:
                description = "Unknown incident happened";
        }
        return description;
    },

    render: function() {
        let actionImage = actionImages[this.props.type];

        return (
            <View style={[styles.action, !this.props.highlight && styles.actionMuted]}>
                { this.props.highlight &&
                <Image style={styles.actionImage} source={actionImage} />
                }
                <View style={styles.header}>
                    <Text style={styles.heading}>
                        <RelativeTime timestamp={this.props.date} />
                    </Text>
                    <Text style={styles.headingMuted}>{this.props.location}</Text>
                </View>
                <Text style={styles.body}>{this.getDescription()}</Text>
            </View>
        );
    }

});

module.exports = Action;