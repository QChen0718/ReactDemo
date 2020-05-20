import * as React from 'react';
import { Text, View, Image ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>首页</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>我的</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Mytabbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
       screenOptions={({route}) => ({
           tabBarIcon:({focused,color,size}) => {
               let iconName;
               if (route.name === 'Home') {
                 if(focused){
                    return <Image source={require('../assets/Tab_Home_P.png')} style={styles.bottomTabIconStyle}/>;
                 }else{
                    return <Image source={require('../assets/Tab_Home_N.png')} style={styles.bottomTabIconStyle}/>;
                 }
               } else if (route.name === 'Settings') {
                   if(focused){
                    return <Image source={require('../assets/Find_P.png')} style={styles.bottomTabIconStyle}/>;
                   }
                   else{
                    return <Image source={require('../assets/Find_N.png')} style={styles.bottomTabIconStyle}/>;
                   }
               }
           },
           tabBarLabel:({focused,color,size}) => {
            if (route.name === 'Home') {
                if (focused) {
                    return <Text style={{color:'red'}}>首页</Text>
                }else{
                    return <Text style={{color:'gray'}}>首页</Text>
                }
                
              } else if (route.name === 'Settings') {
                if (focused) {
                    return <Text style={{color:'red'}}>我的</Text>
                }else{
                    return <Text style={{color:'gray'}}>我的</Text>
                }
              }
           }
       })}
       >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    bottomTabIconStyle:{
        width:30,
        height:30
    }
});