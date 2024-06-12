
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    promptContainer: {
        width: width * 0.90,
        paddingTop: height * 0.01,
        // justifyContent: 'center',
        // alignItems: 'center',
        //backgroundColor: '#ffcf33',
        //borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
    },
});

export default styles;
