import {
    Dimensions
} from 'react-native'

var width= Dimensions.get('window').width;
var height= Dimensions.get('window').height;
var widthMenu = 0;
var sizeAvatar = 0;
var heightImage = 0;
var sizeTextFlatList = 0;
var sizeTextHome = 0;
var widthImage = width/2;

if (width>=500){
    heightImage = 220;
    sizeAvatar = 128;
    widthMenu = 400;
    sizeTextFlatList = 32;
    sizeTextHome = 30;
} else {
    heightImage = 100;
    sizeAvatar = 64;
    widthMenu = 300;
    sizeTextFlatList = 18;
    sizeTextHome = 20;
}
  export {heightImage}
  export {sizeAvatar}
  export {widthMenu}
  export {sizeTextFlatList}
  export {sizeTextHome}
  export {widthImage}