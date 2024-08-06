import { createStackNavigator } from "@react-navigation/stack";
import { PokedexScreen } from "../screens/PokedexScreen";
import { SinglePokemonInterface } from "../interfaces/SinglePokemon";
import { PokemonDetailScreen } from "../screens/PokemonDetailScreen";

export type RootStackParamList = {
    'Pokédex': undefined;
    'Pokémon Detail': { pokemon: SinglePokemonInterface | null };
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Pokédex"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Pokédex"
                component={PokedexScreen}
            />
            <Stack.Screen
                name="Pokémon Detail"
                component={PokemonDetailScreen}
            />
        </Stack.Navigator>
    )
};