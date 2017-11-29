import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Image, TouchableOpacity,
    StyleSheet,
    RefreshControl
} from 'react-native'
import firebase from '../configs/firebaseconfig';
import {sizeImageNews, sizeTitleNews, widthScreen} from "../utils/Dimen";

export default class PhuotNews extends Component {
    constructor(props) {
        super(props);

        this.db = firebase.database();
        this.state = {
            refreshing: false,
            news: [],
        }

        console.ignoredYellowBox = [
            'Setting a timer',
            'Warning encountered 1 time'
        ];
    }


    getData = async () => {

        let a = await this.db.ref("phuotnews");
        a.on('value', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                    data.push(
                        {
                            title: itemChild.val().title,
                            image: itemChild.val().image,
                            content: itemChild.val().content,
                            short_content: itemChild.val().content.substring(0, 75) + " ...",
                        });
                }
            )
            this.setState({
                    news: data
                }
            );
        })
    };

    componentWillMount() {
        this.getData()
    }

    _onRefresh() {
            this.setState({refreshing: false});
    }


    newsItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('ReadNews', {
                title: item.title,
                image: item.image,
                content: item.content,
            })
        }}>
            <View key={item.index} style={newsStyle.styleViewItem}>
                <Image style={newsStyle.styleImage}
                       source={{uri: item.image}}>
                </Image>
                <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
                    <View style={{marginTop: 16,}}>
                        <Text style={newsStyle.styleTitle}>{item.title}</Text>
                    </View>
                    <Text style={{flex: 1, marginTop: 10}}>{item.short_content}</Text>
                </View>
            </View>
        </TouchableOpacity>

    );

    render() {
        console.log("render component name");
        return (
            <View style={newsStyle.styleParent}>
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh.bind(this)}/>
                    }
                    data={this.state.news}
                    renderItem={this.newsItem}
                    keyExtractor={(item, index) => index}/>
            </View>
        );
    }
}

var newsStyle = StyleSheet.create({
    styleParent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81c784'
    },
    styleImage: {
        height: sizeImageNews,
        width: sizeImageNews,
        margin: 16
    },
    styleViewItem: {
        flex: 1,
        width: widthScreen,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    styleTitle: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: sizeTitleNews,
        color: '#005005'
    }
})