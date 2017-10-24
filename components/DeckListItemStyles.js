import { StyleSheet, Platform } from 'react-native';
import { white } from '../utils/colors';

export default styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        paddingLeft: 15,
        textAlign: 'center',
        justifyContent: 'center'
    },
    card: {
        flex: 2,
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    cardSectionTop: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: white,
        paddingTop: 30
    },
    cardSectionBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: white,
        paddingBottom: 20
    },
    cardSection: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: white,
        padding: 10
    },
    touch: {
        flexDirection: 'row',
        marginTop: 12
    }
})
 