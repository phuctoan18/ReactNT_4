import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Counter } from "./Counter";
import BasicRedux from "./redux/basicRedux";
import { NavigationContainer } from '@react-navigation/native';

import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Redux" component={Counter} options={{
                        headerTitle: 'Redux',
                        tabBarOptions: {
                            showIcon: false
                        },
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#f4511ea6',
                        }, headerTitleStyle: {
                            color: 'white',
                        },
                        tabBarIcon: ({ color, size }) => (

                            <IconEvilIcons name="arrow-left" color={color} size={26} />
                        ),
                    }} />
                    <Tab.Screen name="Basic Redux" component={BasicRedux} options={{
                        headerTitle: 'BasicRedux',
                        tabBarOptions: {
                            showIcon: false
                        },
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#f4511ea6',
                        }, headerTitleStyle: {
                            color: 'white',
                        },
                        tabBarIcon: ({ color, size }) => (

                            <IconEvilIcons name="arrow-right" color={color} size={26} />
                        ),
                    }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}