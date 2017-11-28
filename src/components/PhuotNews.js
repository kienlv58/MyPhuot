import React, {Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Image
} from 'react-native'
import firebase from '../configs/firebaseconfig';

export default class PhuotNews extends Component {
    constructor(props) {
        super(props);
        this.db = firebase.database();
        this.state = {
            news: [],
        }

        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }


    getData = async () => {

        let a = await this.db.ref("phuotnews");
        a.on('child_added', (snapshot) => {
            var data = [];
            snapshot.forEach((itemChild) => {
                    let tempObj = itemChild.val();
                    tempObj.title;
                    data.push(tempObj);
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
        this.listenForItems(this.db)
    }

    newsItem = ({item}) => (
        <TouchableOpacity>
            <View key={item.index} >
                <Image/>
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>

    );

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.news}
                    renderItem={this.newsItem}
                    keyExtractor={(item, index) => index}/>
            </View>
        );
    }
}