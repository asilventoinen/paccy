
'use strict';

var React = require('react-native');

var Button = require('./button.ios');
var RelativeTime = require('./relativeTime');

var styles = require('./deliveryMap.styles.ios');
var config = require('./config');

var {
    View,
    Text,
    MapView
    } = React;


var DeliveryMap = React.createClass({

    render: function() {

         let annotations = [
            {
                animateDrop: true,
                latitude: this.props.status.lat,
                longitude: this.props.status.lon,
                title: "Your package",
                id: "statusMarker"
            },
            {
                animateDrop: true,
                latitude: this.props.location.lat,
                longitude: this.props.location.lon,
                title: this.props.location.address,
                id: "targetMarker"
            }
        ];

        let region = {
            latitude: (this.props.status.lat + this.props.location.lat) / 2,
            longitude: (this.props.status.lon + this.props.location.lon) / 2,
            latitudeDelta: Math.abs(this.props.status.lat - this.props.location.lat) * 2,
            longitudeDelta: Math.abs(this.props.status.lon - this.props.location.lon) *2
        };

        return (
            <View>
                <MapView
                    style={styles.map}
                    annotations={annotations}
                    region={region}
                    />

                <View style={styles.menu}>
                    <Text style={styles.body}>
                        Your delivery is set!
                        We'll see you at { this.props.location.address} <RelativeTime timestamp={this.props.status.estimate} />.
                    </Text>

                    <Text style={styles.footer}>We'll give you a reminder 10 minutes before the delivery.</Text>

                    <View style={styles.buttonRow}>
                        <Button style={styles.buttonWrapper}>Add note</Button>
                        <View style={{width: 5}} />
                        <Button style={styles.buttonWrapper}>Change</Button>
                    </View>
                </View>
            </View>
        );
    }

});

module.exports = DeliveryMap;