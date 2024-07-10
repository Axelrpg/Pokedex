export interface AllPokemonResponseInterface {
    count: number;
    next: string;
    previous: null;
    results: AllPokemonInterface[];
}

export interface AllPokemonInterface {
    name: string;
    url: string;
}
