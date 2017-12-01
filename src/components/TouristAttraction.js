import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native';
import firebase from '../configs/firebaseconfig';
import { Rating } from 'react-native-elements';

export default class TouristAttraction extends Component<{}>{

    constructor(props){
        super (props);
        this.db = firebase.database();
        this.state = {
            array:[],
            searchText: "",
        }

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    searchTourist() {
        if (this.state.searchText.length < 1) {
            this.getData()
        }
        else {
            let a = this.db.ref('trips').child('places');
            a.on('value', (dataSnapshot) => {
                var array = [];
                dataSnapshot.forEach((itemChild) => {
                    if (itemChild.val().name == this.state.searchText) {
                        let tempObj = itemChild.val();
                        tempObj.thumnail;
                        tempObj.name;
                        tempObj.adress;
                        tempObj.short_desc;
                        tempObj.acticle;
                        tempObj.images_slide = [];
                        itemChild.child('images_slide').forEach((img) => {
                            tempObj.images_slide.push(img.val());
                        });
                        array.push(tempObj)
                    }
                })
                this.setState({
                    array: array
                });
            })
        }
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
                data.push({
                    thumnail: itemChild.val().thumnail,
                    name: itemChild.val().name,
                    adress: itemChild.val().adress,
                    short_desc: itemChild.val().short_desc,
                    images_slide: tempObj.images_slide,
                    key: itemChild.key,
                    rate: itemChild.rate
                })
            })
            this.setState({array: data});
        })
    };

    componentWillMount() {
        this.getData()
    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }


    onRenderItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            AsyncStorage.setItem('placesKey', item.key)
            this.props.navigation.navigate('Details', {name: item.name,
            short_desc: item.short_desc, images_slide: item.images_slide, key: item.key})}}>
            <View style={css.flatlist}>
                <Image source={{uri: item.thumnail}} style={css.image} resizeMode="cover"/>
                <View style={css.textflat}>
                    <Text style={css.text}>{item.name}</Text>
                    <Text style={css.text}>{item.adress}</Text>
                    <Rating
                        type="star"
                        fractions={1}
                        imageSize={20}
                        readonly
                        startingValue={5}
                        onFinishRating={this.ratingCompleted}
                        style={{marginTop:5}}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )

    render() {
        console.log("render component name")
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
}

const css = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
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
        marginLeft: 5,
        marginRight:5,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: '18%',
        paddingTop: 8,
        flexDirection:'row'
    },
    textflat:{
        flex: 1.2,
        marginLeft:10,
    },
    image:{
        flex: 1
    },
});