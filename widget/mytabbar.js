import * as React from 'react';
import { Text, View, Image ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import LKHome from '../pages/LKHome';
import LKMineScreen from '../pages/LKMine';
import LKHomeDetailScreen from '../pages/LKHomeDetail';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Tabs() {
  return(
    <Tab.Navigator 
       screenOptions={({route}) => ({
           tabBarIcon:({focused,color,size}) => {
               let iconName;
               if (route.name === 'HomeNav') {
                 if(focused){
                    return <Image source={require('../assets/Tab_Home_P.png')} style={styles.bottomTabIconStyle}/>;
                 }else{
                    return <Image source={require('../assets/Tab_Home_N.png')} style={styles.bottomTabIconStyle}/>;
                 }
               } else if (route.name === 'SettingsNav') {
                   if(focused){
                    return <Image source={require('../assets/Find_P.png')} style={styles.bottomTabIconStyle}/>;
                   }
                   else{
                    return <Image source={require('../assets/Find_N.png')} style={styles.bottomTabIconStyle}/>;
                   }
               }
           },
           tabBarLabel:({focused,color,size}) => {
            if (route.name === 'HomeNav') {
                if (focused) {
                    return <Text style={{color:'red'}}>首页</Text>
                }else{
                    return <Text style={{color:'gray'}}>首页</Text>
                }
                
              } else if (route.name === 'SettingsNav') {
                if (focused) {
                    return <Text style={{color:'red'}}>我的</Text>
                }else{
                    return <Text style={{color:'gray'}}>我的</Text>
                }
              }
           },
           tabBarVisible:!route.state || route.state.index === 0,
       })}
       >
        <Tab.Screen name="HomeNav" component={HomeNavScreen} />
        <Tab.Screen name="SettingsNav" component={SettingsNavScreen} />
      </Tab.Navigator>
  );
}
function HomeNavScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = "Home"
        component = {LKHome}
        options = {(props)=>{
          return{
            title:"首页"
          }
        }}
      />
      <Stack.Screen
      name = "HomeDetail"
      component = {LKHomeDetailScreen}
      options = {(props) => {
        return{
          title:"详情"
        }
      }}/>
    </Stack.Navigator>
  )
}
function SettingsNavScreen() {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = "Settings"
        component = {LKMineScreen}
        options = {(props)=>{
          return{
            title:"设置"
          }
        }}
      />
    </Stack.Navigator>
  )
}
export default function Mytabbar() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    bottomTabIconStyle:{
        width:30,
        height:30
    }
});