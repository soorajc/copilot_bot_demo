
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerContainer: {
        height: height * 0.20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcf33',
    },
    botAnimation: {
        height: height * 0.35, 
        width: width * 0.35
    }
    
});

export default styles;
