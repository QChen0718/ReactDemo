import React,{Component} from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator,BottomTabBar} from '@react-navigation/bottom-tabs'
import LKHome from '../pages/LKHome';
import LKFind from '../pages/LKFind';
import LKNearby from '../pages/LKNearby';
import LKMine from '../pages/LKMine';

// 底部导航
const Tab = createBottomTabNavigator()

function MyTabs() {
    return(
        <Tab.Navigator
        initialRouteName="LKHome"
        tabBarOptions={{
            activeTintColor:'#e91e63',
        }}>
            <Tab.Screen
            name="LKHome"
            component={LKHome}
            options={{
                tabBarLabel:'首页',
                tabBarIcon:({})=>(
                    <Image/>
                )
            }}/>
        </Tab.Navigator>
    )
}