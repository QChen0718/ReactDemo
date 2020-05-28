import React,{Component} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

export default class LKHomeDetailScreen extends Component {
    render(){
        return(
            <View style={styles.continer}>
                <Image source={require('../assets/marking_icon.png')} style={styles.images}/>
                <View style={styles.subcontiner}>
                    <Text>
                        zoey浏览了我的移动工作室
                    </Text>
                    <Text>
                        幕浏览了我的文章转发
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    continer:{
        flex:1,
        height:128,
        backgroundColor:'white',
        flexDirection:'row'
    },
    subcontiner:{
        flexDirection:'column'
    },
    images:{
        width:46,
        height:46
    }
})