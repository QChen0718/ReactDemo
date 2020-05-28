import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,TouchableHighlight, Dimensions, ImageBackground} from 'react-native';

const background = require("../assets/Tab_Home_P.png");
const backIcon = require("../assets/Tab_Home_P.png");
const personIcon = require("../assets/Tab_Home_P.png");
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default class LKMineScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground 
                    source = {background}
                    style = {[styles.container,styles.bg]}
                    // 图片缩放方式
                    resizeMode = "cover">
                    <View style={styles.headerContainer}>
                        <View style={styles.headerIconView}>
                            <TouchableOpacity style={styles.headerBackButtonView}>
                                <Image source={backIcon} style={styles.backButtonIcon} resizeMode="contain"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerTitleView}>
                            <Text style={styles.titleViewText}>注册</Text>
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={personIcon} style={styles.inputIcon}
                                resizeMode="contain"/>
                            </View>
                            <TextInput 
                                style={[styles.input, styles.whiteFont]}
                                placeholder="用户名"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={personIcon} style={styles.inputIcon}
                                resizeMode="contain"/>
                            </View>
                            <TextInput 
                                style={[styles.input, styles.whiteFont]}
                                placeholder="邮箱"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={personIcon} style={styles.inputIcon}
                                resizeMode="contain"/>
                            </View>
                            <TextInput 
                                style={[styles.input, styles.whiteFont]}
                                placeholder="密码"
                                placeholderTextColor="#FFF"
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableHighlight onPress={
                            ()=>{}
                        }>
                          <View style={styles.signup}>
                                <Text style={styles.whiteFont}>注  册</Text>
                          </View>  
                        </TouchableHighlight>
                        <TouchableOpacity>
                            <View style={styles.signin}>
                                <Text style={styles.greyFont}>
                                    已有账号?<Text style={styles.whiteFont}>
                                        登录
                                    </Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bg:{
        paddingTop:30,
        width:width,
        height:height
    },
    headerContainer:{
        flex:1
    },
    inputsContainer:{
        flex:3,
        marginTop:50
    },
    footerContainer:{
        flex:1
    },
    headerIconView:{
        marginLeft:10,
        backgroundColor:'transparent'
    },
    headerBackButtonView:{
        width:25,
        height:25
    },
    backButtonIcon:{
        width:25,
        height:25
    },
    headerTitleView:{
        backgroundColor:'transparent',
        marginTop:25,
        marginLeft:25
    },
    titleViewText:{
        fontSize: 40,
        color:'#fff'
    },
    inputContainer:{
        borderWidth:1,
        borderBottomColor:'#CCC',
        borderColor:'transparent',
        flexDirection:'row',
        height:75
    },
    iconContainer:{
        paddingHorizontal:15,
        justifyContent:'center',
        alignItems:'center'
    },
    inputIcon:{
        width:30,
        height:30
    },
    input:{
        flex:1,
        fontSize:20
    },
    signup:{
        backgroundColor:"#ff3366",
        paddingVertical:25,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:15
    },
    signin:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'transparent'
    },
    greyFont:{
        color:'#d8d8d8'
    },
    whiteFont:{
        color:'#fff'
    }
})