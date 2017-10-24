import { StyleSheet, Platform } from 'react-native';
import { white } from '../utils/colors';


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center'
    },
    titleStyle: {
        fontSize: 60,
        paddingLeft: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    btn: {
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardSection: {
        borderColor: white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    }
});

