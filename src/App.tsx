import { useState } from "react";
import { useEffect } from "react";

import NavBar from "./components/NavBar";

import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		popUp: "pika pikachu !!!",
	},
	{
		name: "mew",
	},
];

function App() {
	useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);
	const [pokemonIndex, setPokemonIndex] = useState(0);
	return (
		<>
			<NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</>
	);
}

export default App;
