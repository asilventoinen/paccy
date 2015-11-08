'use strict';

var React = require("react-native");
var OrderList = require("./orderList.ios");

var {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    } = React;


var Paccy = React.createClass({

    onRightButtonPress: function() {
        /*
        this.refs.navigator.push({
            title: "Settings",
            component: Settings
        });
        */
    },

    render: function () {
        return (
            <NavigatorIOS
                ref="navigator"
                style={styles.container}
                itemWrapperStyle={styles.wrapper}
                tintColor={"#0073CF"}
                titleTextColor={"#0073CF"}
                translucent={false}
                initialRoute={{
                    title: "Orders",
                    component: OrderList,
                    backButtonTitle: "Orders",
                    leftButtonIcon: require('./images/NavigatorLogo.png'),
                    rightButtonIcon: require('./images/NavigatorUser.png'),
                    onRightButtonPress: this.onRightButtonPress
                }}
                />
        );
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
       marginBottom: 64, // TODO: Find a more robust NavigationIOS container height workaround
       backgroundColor: '#fafafa',
    }
});

AppRegistry.registerComponent('Paccy', () => Paccy);
