
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        width: width * 0.50,
        padding: height * 0.02,
        borderRadius: width * 0.02,
        backgroundColor: '#424242',
        marginRight: width * 0.02,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,  
    },
    profileImage: {
        width: width * 0.20,
        height: width * 0.20,
        borderRadius: width * 0.20 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#ededed",
        backgroundColor: '#ededed'
    },
    employeeName: {
        fontWeight: 'bold',
        marginTop: height * 0.01,
        marginBottom: height * 0.01,
        color: 'white',
    },
    designation: {
        fontWeight: '400',
        color: 'white',
    }
});

export default styles;
