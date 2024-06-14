
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    chatView: {
        justifyContent:'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        borderRadius: width * 0.30,
        padding: width * 0.05,
        margin: height * 0.01,
        elevation: 5,
        shadowColor: '#212121',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,  
    },
    textLabel: {
        color: '#ffffff',
        textAlign: 'left'
    },
    alignEnd: {
        alignSelf: 'flex-end'
    }
});

export default styles;
