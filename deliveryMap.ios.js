
'use strict';

var React = require('react-native');
var Button = require('./button.ios');
var RelativeTime = require('./relativeTime');

var styles = require('./deliveryMap.styles.ios');

var {
    View,
    Text,
    MapView
    } = React;


var DeliveryMap = React.createClass({

    render: function() {

        return (
            <View>
                <MapView
                    style={styles.map}
                    showsUserLocation={false}
                    annotations={[{ longitude: 60.30654594, latitude: 24.97467041, title: 'Your package' }]}
                    />
                <View style={styles.menu}>
                    <Text style={styles.body}>
                        Your delivery is set! We'll see you at
                        <Text style={styles.emphasized}> {this.props.location.address} </Text>
                        in about
                        <Text style={styles.emphasized}> <RelativeTime style={styles.emphasized} timestamp={this.props.status.estimate}/></Text>.
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