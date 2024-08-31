import React from "react";
import { fetchPokemon } from "../services/api";
import Carousel from "./Carousel";
import PokemonCard from "./PokemonCard";

// export function Pokemon() {
//     return (
//         <div>
//             <h1>Pokemon</h1>
//         </div>
//     )
// }

export const Pokemon = () => {
  const [cat, setCat] = React.useState(null);
  const [id, setId] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [pokemon, setPokemon] = React.useState(null);

  const handlePrevious = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  const handleNext = () => setId(id + 1);

  React.useEffect(() => {
    // fetch("https://api.thecatapi.com/v1/images/search")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCat(data[0]);
    //     console.log(data[0]);
    //   })
    //   .then(() => {
    //     setLoading(false);
    //   });

    const handleFetchPokemon = async () => {
      setLoading(true);
      setError(null);

      const { error, response } = await fetchPokemon(id);

      if (error) {
        setError(error.message);
      } else {
        setPokemon(response);
      }

      setLoading(false);
    };

    handleFetchPokemon();
  }, [id]);

  return (
    <Carousel onPrevious={handlePrevious} onNext={handleNext}>
      <PokemonCard loading={loading} error={error} data={pokemon} />
    </Carousel>
  );
};
