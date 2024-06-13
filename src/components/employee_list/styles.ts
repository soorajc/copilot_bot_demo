
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    listContainer: {
        padding: height * 0.02,
    },
});

export default styles;
