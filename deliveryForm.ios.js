
'use strict';

var React = require('react-native');
var Dropdown = require('react-native-dropdown');
var _ = require('lodash');
var moment = require('moment');

var Button = require('./button.ios');
var Select = require('./select');

var styles = require('./deliveryForm.styles.ios');

var {
    View,
    Text,
    Image
    } = React;

var {
    Select,
    Option,
    OptionList,
    updatePosition
    } = Dropdown;

var actionImage = require("./images/ActionReadyToDeliver.png");

// Let's use hard-coded addresses!

var locations = [
    {
        address: "Aleksis Kiven katu 17, Helsinki",
        lat: 60.1912472,
        lon: 24.9483582
    },
    {
        address: "Helsinginkatu 4, Helsinki",
        lat: 60.18751052,
        lon: 24.95992899
    },
    {
        address: "Other...",
    }
];

// We'll create fresh & hard-coded time slots

var timeslots = [
    {title: "Tomorrow, 8:00-12:00"},
    {title: "Tomorrow, 12:00-16:00"},
    {title: "Tomorrow, 16:00-20:00"}
];

var deliveryTime = moment().add(1, 'days').startOf('day').add(8, 'hours');
for(var i=0;i<timeslots.length;i++) {
    timeslots[i].earliest = deliveryTime.unix();
    timeslots[i].latest = deliveryTime.add(4, 'hours').unix();
}

var DeliveryForm = React.createClass({

    getInitialState: function() {
        return {
            selectedLocation: locations[0],
            selectedTime: timeslots[0],
        };
    },

    componentDidMount: function() {
        updatePosition(this.refs['SELECT1']);
        updatePosition(this.refs['SELECT2']);
        updatePosition(this.refs['OPTIONLIST']);
    },

    _getOptionList: function() {
        return this.refs['OPTIONLIST'];
    },

    onSelectLocation: function(option) {
        this.setState({selectedLocation: option.props.data});
    },
    onSelectTime: function(option) {
        this.setState({selectedTime: option.props.data});
    },
    onComplete: function() {
        this.props.onComplete({ location: this.state.selectedLocation, time: this.state.selectedTime });
    },


    render: function() {

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>We are ready to deliver!</Text>
                <Image style={styles.actionImage} source={actionImage} />
                <Text style={styles.subheading}>Choose when and where?</Text>
                <Text style={styles.footer}>You have 48 minutes to choose.</Text>


                <Select
                    style={styles.select}
                    width={250}
                    ref="SELECT1"
                    optionListRef={this._getOptionList}
                    onSelect={this.onSelectLocation}>
                    {locations.map((option, i) => (
                        <Option key={i}>
                            <Text data={option}>{option.address}</Text>
                        </Option>))}
                </Select>

                <Select
                    style={styles.select}
                    width={250}
                    ref="SELECT2"
                    optionListRef={this._getOptionList}
                    onSelect={this.onSelectTime}>
                    {timeslots.map((option, i) => (
                        <Option key={i}>
                            <Text data={option}>{option.title}</Text>
                        </Option>))}
                </Select>

                <Button jumbo={true} style={styles.button} onPress={this.onComplete}>OK</Button>

                <OptionList ref="OPTIONLIST"/>
            </View>
        );

    }

});

module.exports = DeliveryForm;