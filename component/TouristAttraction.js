import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ToolbarAndroid,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

export default class TouristAttraction extends Component<{}>{

    constructor(props){
        super (props);
        this.state = {text: ''}
        this.state = {
            array:[
                {key:'1', destination: 'Sapa', place:'Lào Cai'},
                {key:'2', destination: 'Đà Nẵng', place:'Đà Lạt'},
                {key:'3', destination: 'Đỉnh Hàm Lợn', place:'Đà Lạt'},
                {key:'4', destination: 'Núi Trầm', place:'Đà Lạt'},
                {key:'5', destination: 'Tam Đảo', place:'Đà Lạt'},
            ]
        }
    }

    render() {
        let pic = {
            uri: 'https://cdn3.ivivu.com/2014/10/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU.com-1-1024x681.jpg'
        }
        let evalua = {
            uri: 'http://www.potters.com.au/wp-content/uploads/2017/09/five-stars.png'
        }
        return (
            <View style={css.container}>
                {/*<ToolbarAndroid logo={require('../image/back.png')}*/}
                                {/*style={css.toolbar}*/}
                                {/*title='back'*/}
                                {/*titleColor='white'*/}
                                {/*onActionSelected={this.onActionSelected}/>*/}
                <View style={css.search}>
                    <TextInput style={css.textput}
                               placeholder='Search'
                               underlineColorAndroid={'transparent'}
                               onChangeText={(text) => this.setState({text})}
                               value={this.state.text}/>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={css.textSearch}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.list}>
                    <FlatList
                        data={this.state.array}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Details')}}>
                                <View style={css.flatlist}>
                                    <Image source={pic} style={css.image}/>
                                    <View style={css.textflat}>
                                        <Text style={css.text}>{item.destination}</Text>
                                        <Text style={css.text}>{item.place}</Text>
                                        <Image source={evalua} style={css.evalua}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'ghostwhite'
    },
    toolbar:{
        backgroundColor:'#00c853',
        height:56
    },
    search:{
        height:50,
        marginTop:10,
        marginLeft:5,
        flexDirection:'row',
    },
    textSearch:{
        padding:8,
        fontSize:16,
        color:'blue'
    },
    textput:{
        height:40,
        flex:1,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:9
    },
    list:{
        flex:1,
    },
    text:{
        color:'black',
        marginTop:5,
        fontSize:16,
    },
    flatlist:{
        borderBottomWidth:1,
        padding:10,
        flexDirection:'row'
    },
    textflat:{
        marginLeft:10,
    },
    image:{
        width:150,
        height:90
    },
    evalua:{
        marginTop:5,
        width:70,
        height:30
    }
});