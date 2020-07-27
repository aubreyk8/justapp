import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

class CheckOutPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Check Out Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CheckOutPage;
