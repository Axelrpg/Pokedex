import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get('window');

export const lightStyle = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pokemonAllView: {
        padding: 10,
    },
    pokemonDetailImage: {
        alignSelf: 'center',
        height: height * 0.2,
        marginHorizontal: 10,
        marginVertical: 10,
        width: height * 0.2,
    },
    pokemonDetailSupportText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
    pokemonDetailTitle: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pokemonListItemImage: {
        resizeMode: 'contain',
        height: height * 0.15,
        width: width * 0.3,
    },
    pokemonListItemSurface: {
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        height: height * 0.2,
        justifyContent: 'center',
        margin: 5,
        overflow: 'hidden',
        width: width * 0.4,
    },
    pokemonListItemText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pokemonListItemTouchableRipple: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
    },
    pokemonType: {
        alignItems: 'center',
        height: height * 0.05,
        justifyContent: 'center',
        marginHorizontal: 3,
    },
    pokemonTypeScrollView: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
    },
});