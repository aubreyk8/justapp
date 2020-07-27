import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

class ShoppingPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Shopping Page</Text>
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

export default ShoppingPage;
