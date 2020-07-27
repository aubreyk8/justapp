import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from "./Pages/Auth/LoginPage";
import RegistrationPage from "./Pages/Auth/RegistrationPage";
import PasswordReset from "./Pages/Auth/PasswordReset";
import ShoppingPage from "./Pages/ShoppingPage";
import CheckOutPage from "./Pages/CheckOutPage";
import CartPage from "./Pages/CartPage";

const StackNavigator = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer initialRouteName="LoginPage">
            <StackNavigator.Navigator>
                <StackNavigator.Screen name="LoginPage" component={LoginPage} />
                <StackNavigator.Screen name="RegistrationPage" component={RegistrationPage} />
                <StackNavigator.Screen name="PasswordReset" component={PasswordReset} />
                <StackNavigator.Screen name="ShoppingPage" component={ShoppingPage} />
                <StackNavigator.Screen name="CheckOutPage" component={CheckOutPage} />
                <StackNavigator.Screen name="CartPage" component={CartPage} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
