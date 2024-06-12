
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    videoPlayerContainer: {
        alignSelf: 'flex-end',
        width: width * 0.80,
        borderRadius: 10,
        height: height * 0.40,
        backgroundColor: '#ededed',
        padding: width * 0.03,
        margin: height * 0.01,
    },
    webView: {
        flex: 1,
    }
    
});

export default styles;
