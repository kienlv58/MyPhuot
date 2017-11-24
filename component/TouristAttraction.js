import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import firebase from '../config/firebaseconfig'

export default class TouristAttraction extends Component<{}>{

    constructor(props){
        super (props);
        this.db = firebase.database();
        this.state = {
            array:[],
            searchText: ''
        }

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    searchTourist() {
        if (this.state.searchText.length < 1) {
            this.loadList(db)
        }
        else {
            let a = this.db;
            a.on('value', (dataSnapshot) => {
                var array = [];
                dataSnapshot.forEach((itemChild) => {
                    if (itemChild.val().name == this.state.searchText) {
                        array.push({
                            key: itemChild.key,
                            adress: itemChild.adress,
                            name: itemChild.val().name,
                        })
                    }
                })
                this.setState({
                    array: array
                });
            })
        }
    }

    loadList(db) {
        db.ref('trips').child('places').on('value', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                data.push({
                    thumnail: itemChild.val().thumnail,
                    name: itemChild.val().name,
                    adress: itemChild.val().adress,
                    short_desc: itemChild.val().short_desc,
                    acticle: itemChild.val().acticle,
                });

            })
            this.setState({
                array: data
            });
        })
    }

    getData = async () => {

        let a = await this.db.ref("trips").child('places');
        a.on('value', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                let tempObj = itemChild.val();
                tempObj.images_slide = [];
                itemChild.child('images_slide').forEach((img) => {
                    tempObj.images_slide.push(img.val());
                });
                data.push(tempObj);
            })
            this.setState({array: data});
        })
    };

    componentWillMount() {
        this.getData()
    }

    onRenderItem = ({item}) => (
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Details', {name: item.name,
            short_desc: item.short_desc, images_slide: item.images_slide, acticle: item.acticle})}}>
            <View style={css.flatlist}>
                <Image source={{uri: item.thumnail}} style={css.image}/>
                <View style={css.textflat}>
                    <Text style={css.text}>{item.name}</Text>
                    <Text style={css.text}>{item.adress}</Text>
                    <Image source={{uri: 'http://www.potters.com.au/wp-content/uploads/2017/09/five-stars.png'}} style={css.evalua}/>
                </View>
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={css.container}>
                <View style={css.search}>
                    <TextInput style={css.textput}
                               placeholder='Search'
                               underlineColorAndroid={'transparent'}
                               onChangeText={(searchText) => this.setState({searchText})}
                               value={this.state.text}/>
                    <TouchableOpacity onPress={() => {this.searchTourist()}}>
                        <Text style={css.textSearch}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.list}>
                    <FlatList
                        data={this.state.array}
                        renderItem={this.onRenderItem}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.loadList(this.db);
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
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    textSearch:{
        padding:8,
        fontSize:18,
        marginRight: 5,
        color:'white',
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor:'mediumturquoise'
    },
    textput:{
        height:40,
        flex:1,
        marginLeft:5,
        borderColor:'gray',
        borderWidth:1,
        borderBottomLeftRadius: 7,
        borderTopLeftRadius:7
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
        padding:15,
        flexDirection:'row'
    },
    textflat:{
        marginLeft:10,
    },
    image:{
        width:'45%',
        height:'100%'
    },
    evalua:{
        marginTop:5,
        width:70,
        height:30
    }
});