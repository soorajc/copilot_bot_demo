
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    promptContainer: {
        paddingTop: height * 0.01,
        alignSelf: 'center',
        borderRadius: 10,
    },
    loaderContainer: {
        backgroundColor: '#ededed',
    }
});

export default styles;
