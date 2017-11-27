import React, {Component} from 'react'
import ImageSlider from 'react-native-image-slider';
import firebase from '../config/firebaseconfig'

export default class Slide extends Component<{}>{

    constructor(props){
        super(props);
        this.db = firebase.database();
        this.state = {
            position: 0,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 4000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <ImageSlider
                images={this.props.array}
                position={this.state.position}
                onPositionChanged={position => this.setState({position})}/>
        );
    }
}