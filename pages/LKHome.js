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
            dataArray:[{key:'a',name:'张三',imagename:''},{key:'b',name:'李四'}],
            refreshing:false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing:true});
        fetchData().then(()=>{
            this.setState({refreshing:false});
        });
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
                >
            
            </FlatList>
        );
    }
    _cellView(item,index){
        return(
            <TouchableOpacity onPress={()=> this.props.navigation.push('HomeDetail')}>
                <View style={styles.viewStyles}>
                    <Text>{index}</Text>
                    <Text style={styles.textStyles}>{item.name}</Text>
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
        marginLeft:10
    }
})