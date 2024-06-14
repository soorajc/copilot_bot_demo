
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: '#ededed',
        padding: width * 0.02,
        margin: height * 0.01,
    },
    calendar: {
        width: width * 0.90,
        alignSelf: 'center',
    }
    
});

export default styles;
