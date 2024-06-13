
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerContainer: {
        //height: height * 0.40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: '#ededed',
        padding: width * 0.02,
        margin: height * 0.01,
    },
    calendar: {
        //height: height * 0.30, 
        width: width * 0.90,
        alignSelf: 'center',
    }
    
});

export default styles;
