import { Appearance, Dimensions, StyleSheet } from "react-native";
import { darkColors } from "../colors/DarkColors";
import { lightColors } from "../colors/lightColors";

const { height, width } = Dimensions.get('window');

const currentStyle = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

export const style = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appbarHeader: {
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
    },
    pokedexSearchbar: {
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
        marginBottom: 5,
        marginHorizontal: 10,
    },
    pokedexView: {
        flex: 1,
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
    },
    pokemonDetailImage: {
        alignSelf: 'center',
        height: height * 0.2,
        marginHorizontal: 10,
        marginVertical: 10,
        width: height * 0.2,
    },
    pokemonDetailSupportText: {
        color: currentStyle === 'dark'
            ? darkColors.primaryText.color
            : lightColors.primaryText.color,
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
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
        borderRadius: 10,
        elevation: 5,
        height: height * 0.2,
        justifyContent: 'center',
        margin: 5,
        overflow: 'hidden',
        shadowColor: currentStyle === 'dark'
            ? darkColors.primaryText.color
            : lightColors.primaryText.color,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: width * 0.4,
    },
    pokemonListItemText: {
        color: currentStyle === 'dark'
            ? darkColors.primaryText.color
            : lightColors.primaryText.color,
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
        backgroundColor: currentStyle === 'dark'
            ? darkColors.primaryBackground.color
            : lightColors.primaryBackground.color,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
    },
});