
'use strict';

var React = require('react-native');
var Button = require('./button.ios');

var styles = require('./invoice.styles.ios');

var {
    View,
    TouchableOpacity,
    Text,
    LayoutAnimation,
    Animated
    } = React;

var InvoiceItemList = React.createClass({

    render: function() {
        return (
            <View>
                {this.props.items.map((item) => (
                    <View style={styles.item}>
                        <Text style={styles.mutedText}>{item.title}</Text>
                        <Text style={styles.mutedText}>{item.price.toFixed(2)}</Text>
                    </View>
                ))}
            </View>
        );
    }
});

var Invoice = React.createClass({

    getInitialState: function() {
        return {
            showDetails: false
        };
    },

    onPress: function() {
        this.setState({ showDetails: !this.state.showDetails });
        LayoutAnimation.spring();
    },
    render: function() {

        return (
            <View style={styles.invoice}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={this.onPress}>
                        { this.state.showDetails ? "Hide invoice" : "What's in it?" }
                    </Button>
                </View>
                { this.state.showDetails &&
                    <View>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Your order invoice</Text>
                        </View>
                        <View style={styles.divider} />
                        <InvoiceItemList items={this.props.items}></InvoiceItemList>
                        <View style={styles.divider} />
                        <InvoiceItemList items={this.props.expenses}></InvoiceItemList>
                        <View style={styles.divider} />
                        <View style={styles.item}>
                            <Text>Total</Text>
                            <Text>{this.props.total.toFixed(2)} €</Text>
                        </View>
                    </View>
                }
            </View>
        );
    }

});


module.exports = Invoice;