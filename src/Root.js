import React from "react";
import {
    createAppContainer,
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';

import Home from './screens/Home';
import EditCustomer from './screens/EditCustomer';
import AddCustomer from './screens/AddCustomer';

import Header from './components/Header';

const StackNavigator = createStackNavigator(
    { 
        Home: Home,
        EditCustomer: EditCustomer,
        AddCustomer: AddCustomer 
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;