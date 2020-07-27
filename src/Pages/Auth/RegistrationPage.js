import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

class RegistrationPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Registration Page</Text>
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

export default RegistrationPage;
