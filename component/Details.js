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
import ImageSlider from 'react-native-image-slider';

export default class Details extends Component<{}>{

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <View style={details.container}>
                <ImageSlider
                    images={[
                        'https://cdn3.ivivu.com/2014/10/du-lich-sa-pa-cam-nang-tu-a-den-z-iVIVU.com-1-1024x681.jpg',
                        'https://upload.wikimedia.org/wikipedia/vi/6/62/Sa_Pa_ng%C3%A0y_tuy%E1%BA%BFt_2.jpg',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFChG1MxjTwC9dP5qJ6UiNJppm2vixP0Pkh3Idot5ZRnOAPJc_',
                    ]}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({position})}/>
                <View style={details.title}>
                    <Text style={details.text}>Sapa - Lào Cai</Text>
                    <Text style={details.text}>Sapa nằm ở địa phận Lào Cai, cách thủ đo Hà Nội khoảng 300 km</Text>
                </View>
            </View>
        );
    }

}

const details = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{

    },
});
