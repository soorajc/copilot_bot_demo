
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    listContainer: {
        width: width,
        padding: height * 0.02,
    },
});

export default styles;
