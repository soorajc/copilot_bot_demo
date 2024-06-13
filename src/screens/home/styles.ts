
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

const {  height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        flex: 1,
    },
    chatView: {
        width: width * 0.60,
        justifyContent:'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 20,
        margin: 10,
    },
    textLabel: {
        //width: width * 0.20,
        color: 'black',
    },
    alignEnd: {
        alignSelf: 'flex-end'
    },
    videoView: {
        alignSelf: 'flex-end',
        width: width * 0.80,
        borderRadius: 10,
        height: height * 0.40,
        backgroundColor: '#ededed',
        padding: 4,
        margin: 10,
    },
    card: {
        width: width * 0.50,
        height: height * 0.18,
        borderRadius: 15,
        backgroundColor: '#424242',
        marginRight: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,  
    },
    cardTitle: {
        color: 'white',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "#ededed",
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,  
    }
});

export default styles;
