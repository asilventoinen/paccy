
'use strict';

var React = require('react-native');
var _ = require('lodash');

var Button = require('./button.ios');
var Select = require('./select');
var styles = require('./deliveryForm.styles.ios');

var {
    View,
    Text,
    Image
    } = React;

var actionImage = require("image!ActionReadyToDeliver");

// Let's use hard-coded addresses!

var locations = [
    {
        address: "Rauhankatu 2, Helsinki",
        lon: 64.345345,
        lat: 24.56363
    },
    {
        address: "Helsinginkatu 4, Helsinki",
        lon: 64.345345,
        lat: 24.56363
    },
    {
        address: "Other...",
    }
];

// We'll create fresh & hard-coded time slots

var timeslots = (function(){
    return [
        { id: 0, title: 'Today, 16:00-20:00', earliest: Date.now + 1000, latest: Date.now + 3000},
        { id: 1, title: 'Tomorrow, 8:00-12:00', earliest: Date.now + 3000, latest: Date.now + 5000},
        { id: 1, title: 'Tomorrow, 12:00-16:00', earliest: Date.now + 3000, latest: Date.now + 5000},
    ];
})();

var DeliveryForm = React.createClass({
    getInitialState: function() {
        return {
            locationConfirmed: false,
            selectedLocation: {},
            selectedTime: {}
        }
    },

    onConfirmLocation: function(option) {
        this.setState({locationConfirmed: true, selectedLocation: option});
    },

    onConfirmTime: function(option) {
        this.setState({selectedTime: option});
        this.props.onComplete({ location: this.state.selectedLocation, time: this.state.selectedTime });
    },

    render: function() {
        let selectTitle = this.state.locationConfirmed ? "First, choose where?" : "And then, choose when?";

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>We are ready to deliver!</Text>
                <Image style={styles.actionImage} source={actionImage} />
                <Text style={styles.subheading}>{selectTitle}</Text>

                { !this.state.locationConfirmed &&
                <View>
                    <Select options={locations}
                            optionFormatter={(location) => location.address}
                            confirmText={"Continue"}
                            onConfirm={this.onConfirmLocation}/>
                </View>
                }
                { this.state.locationConfirmed &&
                <View>
                    <Select options={timeslots}
                            optionFormatter={(option) => option.title}
                            confirmText={"OK!"}
                            onConfirm={this.onConfirmTime}/>
                </View>
                }
            </View>
        );
    }
});

module.exports = DeliveryForm;