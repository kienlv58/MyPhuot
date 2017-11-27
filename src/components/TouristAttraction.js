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
                        tempObj.acticle = [];
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
                tempObj.thumnail;
                tempObj.name;
                tempObj.adress;
                tempObj.short_desc;
                tempObj.acticle = [];
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

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }


    onRenderItem = ({item}) => (
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Details', {name: item.name,
            short_desc: item.short_desc, images_slide: item.images_slide, acticle: item.acticle})}}>
            <View style={css.flatlist}>
                <Image source={{uri: item.thumnail}} style={css.image}/>
                <View style={css.textflat}>
                    <Text style={css.text}>{item.name}</Text>
                    <Text style={css.text}>{item.adress}</Text>
                    <Rating
                        type="star"
                        fractions={1}
                        imageSize={20}
                        startingValue={3.5}
                        onFinishRating={this.ratingCompleted}
                        style={{marginTop:5, backgroundColor:'#f8f8ff'}}
                    />
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
}

const css = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'ghostwhite'
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
});