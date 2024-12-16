interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((pokemon, index) => (
				<button
					key={pokemon.name}
					type="button"
					onClick={() => {
						pokemon.name === "pikachu" ? alert("pika pikachu !!!") : null;
						setPokemonIndex(index);
					}}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}

export default NavBar;
