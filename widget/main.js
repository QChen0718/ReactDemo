import React ,{Component} from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation, route}){
    // React.useEffect(() => {
    //     if (route.params?.post) {

    //     }
    // },[route.params?.post]);
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}/>
            <Text style ={{margin:10}}>Post:{route.params?.post}</Text>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {navigation.navigate('Details',{
                    itemId:86,
                    otherParam:'anything you want here'
                })
            }}
            />
        </View>
    );
}
function DetailsScreen({route, navigation}) {
    const {itemId} = route.params;
    const {otherParam} = route.params;
    return(
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Details Screen</Text>
             <Text>itemId:{JSON.stringify(itemId)}</Text>
            <Text>otherParam:{JSON.stringify(otherParam,"mor")}</Text>
            {/* 跳转到下一个页面 */}
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details',{
                    itemId:Math.floor(Math.random()*100)
                })}
            />
            {/* 返回到指定页面 */}
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            {/* 返回到上级页面 */}
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
function CreatePostScreen({navigation, route}) {
    const [postText, setPostText] = React.useState('');
    return(
        <>
        <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
    );
}
const Stack = createStackNavigator();
function BaseNav() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="首页" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default BaseNav;

