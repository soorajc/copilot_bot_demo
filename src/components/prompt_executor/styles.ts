
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
    tagContainer: {
        width: width * 0.80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#ededed',
        padding: 5,
        elevation: 5,
        shadowColor: '#ededed',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,  
    },
    iconContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    animatedIcon: {
        height: 80,
        width: 80,
    },
    titleContainer: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        //backgroundColor: 'green',
    }
});

export default styles;
