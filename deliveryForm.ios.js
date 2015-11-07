
'use strict';

var React = require('react-native');
var Dropdown = require('react-native-dropdown');
var _ = require('lodash');

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
        console.log(option);
        //this.setState({selectedLocation: option.props.data});
    },
    onSelectTime: function(option) {
        //this.setState({selectedTime: option.props.data});
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
                    onSelect={this.onSelectLocation()}>
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