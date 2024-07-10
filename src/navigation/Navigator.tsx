import { createStackNavigator } from "@react-navigation/stack";
import { PokedexScreen } from "../screens/PokedexScreen";
import { PokemonDetail } from "../screens/PokemonDetail";
import { SinglePokemonInterface } from "../interfaces/SinglePokemon";

export type RootStackParamList = {
    'Pokédex': undefined;
    'Pokémon Detail': { pokemon: SinglePokemonInterface | null };
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Pokédex"
        >
            <Stack.Screen
                name="Pokédex"
                component={PokedexScreen}
            />
            <Stack.Screen
                name="Pokémon Detail"
                component={PokemonDetail}
            />
        </Stack.Navigator>
    )
};