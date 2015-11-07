
'use strict';

var React = require('react-native');
var Dropdown = require('react-native-dropdown');

var Button = require('./button.ios');

var {
    View,
    Text,
    StyleSheet,
    } = React;

var {
    Select,
    Option,
    OptionList,
    updatePosition
    } = Dropdown;


var SelectWrapper = React.createClass({

    componentDidMount: function() {
        updatePosition(this.refs['SELECT']);
        updatePosition(this.refs['OPTIONLIST']);
    },

    _getOptionList: function() {
        return this.refs['OPTIONLIST'];
    },

    componentWillMount: function() {
        this.setState({ selectedOption: this.props.options[0] });
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({ selectedOption: nextProps.options[0] });
    },

    onSelect: function(option) {
        this.setState({ selectedOption: option.props.data });
    },

    onConfirm: function() {
        this.props.onConfirm(this.state.selectedOption);
    },

    render: function() {

        return (
            <View style={styles.container}>
                <Select
                    style={styles.select}
                    width={250}
                    ref="SELECT"
                    optionListRef={this._getOptionList}
                    onSelect={this.onSelect}>
                    {this.props.options.map((option, i) => (
                        <Option key={i}>
                            <Text data={option}>{this.props.optionFormatter(option)}</Text>
                        </Option>))}
                </Select>
                <Button onPress={this.onConfirm}>{this.props.confirmText}</Button>
                <OptionList ref="OPTIONLIST"/>
            </View>
        );

    }
});


var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    select: {
        marginVertical: 10,
    }
});


module.exports = SelectWrapper;