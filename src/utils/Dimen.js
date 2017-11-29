import {
    Dimensions
} from 'react-native'

var widthScreen= Dimensions.get('window').width;
var height= Dimensions.get('window').height;
var widthMenu = 0;
var sizeAvatar = 0;
var heightImage = 0;
var sizeTextFlatList = 0;
var sizeTextHome = 0;
var widthImage = widthScreen/2;
var sizeImageNews = 0;
var sizeTitleNews = 0;

if (widthScreen>=500){
    heightImage = 220;
    sizeAvatar = 128;
    widthMenu = 400;
    sizeTextFlatList = 32;
    sizeTextHome = 30;
    sizeImageNews = 128;
    sizeTitleNews = 20;
} else {
    heightImage = 110;
    sizeAvatar = 64;
    widthMenu = 300;
    sizeTextFlatList = 18;
    sizeTextHome = 20;
    sizeImageNews = 72;
    sizeTitleNews = 16;
}
  export {heightImage}
  export {sizeAvatar}
  export {widthMenu}
  export {sizeTextFlatList}
  export {sizeTextHome}
  export {widthImage}
  export {widthScreen}
  export {sizeImageNews}
  export {sizeTitleNews}