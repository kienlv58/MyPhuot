import React, { Component } from 'react';
import { Text,FlatList,View,Image } from 'react-native';
export default class Member extends Component {
    constructor(props){
        super(props);
        this.state= {
            arrMember:[
                {key:'1',name: 'Lò Văn Kiên',birthOfDate:'02/10/1994',position:'trưởng nhóm'},
                {key:'2',name: 'Nguyễn Văn A',birthOfDate:'02/10/1994',position:'thủ quỹ'},
                {key:'3',name: 'Nguyễn Văn B',birthOfDate:'02/10/1994',position:'phó nhóm'},
                {key:'4',name: 'Nguyễn Văn C',birthOfDate:'02/10/1994',position:'thành viên'},
                {key:'5',name: 'Nguyễn Văn D',birthOfDate:'02/10/1994',position:'thành viên'},
                {key:'6',name: 'Nguyễn Văn E',birthOfDate:'02/10/1994',position:'thành viên'},
                {key:'7',name: 'Nguyễn Văn G',birthOfDate:'02/10/1994',position:'thành viên'},
                {key:'8',name: 'Nguyễn Văn H',birthOfDate:'02/10/1994',position:'thành viên'},
            ],
        }}

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
               <FlatList
                    data={this.state.arrMember}
                    renderItem={({item}) =>
                        <View style={{flexDirection: 'row', padding: 10}}>
                            <View style={{flex: 1}}>
                                <Image source={require('./icon_none_image.jpg')}/>
                            </View>
                            <View style={{flex: 3, flexDirection: 'column'}}>
                                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                                <Text>Ngày sinh : {item.birthOfDate}</Text>
                                <Text>Chức vụ : {item.position}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
}