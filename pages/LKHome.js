import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    Button,
    FlatList,
    StyleSheet, 
    TouchableOpacity,
    RefreshControl
} from 'react-native';

const screenW = Dimensions.get('window').width
export default class LKHome extends Component {
    constructor(){
        super();
        this.state = {
            dataArray:[{key:'a',name:'张三'},{key:'b',name:'李四'}],
            refreshing:false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing:true});
        // 模拟加载数据
        setTimeout(()=>{
            let newDataArr = Array.from(new Array(5)).map((value,index)=>({
                key:'b'+index,
                name:'李四'
            })).concat(this.state.dataArray);
            //更新状态机
            this.setState({
                dataArray:newDataArr,
                refreshing:false
            });
        },2000)
    }
    render(){
        return(
            <FlatList
            data={this.state.dataArray}
            renderItem={
                ({item,index}) => 
                    this._cellView(item,index)
                }
                keyExtraactor = {({item,index}) => item + index}
            refreshControl={
                <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}/>
            }
            ListHeaderComponent={()=>(
                <View>
                    <Text>组头</Text>
                </View>
            )}
            ListFooterComponent={()=>{
                return(
                    <View>
                    <Text>组尾</Text>
                </View>
                )
                
            }}
            >
            
            </FlatList>
        );
    }
    _cellView(item,index){
        return(
            <TouchableOpacity onPress={()=> this.props.navigation.push('HomeDetail')}>
                <View style={styles.viewStyles}>
                    <Text>{index}</Text>
                    <Image source={require('../assets/header_photo.webp')} style={styles.imageStyles}/>
                    <Text style={styles.textStyles}>{item.name}</Text>
                    <Text style={{marginRight:40}}>8</Text>
                    <Text style={{marginRight:10}}>测试</Text>
                    
                </View>
            </TouchableOpacity>
            
        );
    }
}

const styles = StyleSheet.create({
    viewStyles:{
        width:screenW,
        height:49,
        backgroundColor:'red',
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10
    },
    textStyles:{
        color:'white',
        marginLeft:10,
        // 撑满剩余的部分
        flex:1
    },
    imageStyles:{
        width:40,
        height:40
    }
})