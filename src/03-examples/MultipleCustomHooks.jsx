import React from 'react';
import { useFetch } from "../hooks/useFetch.js";
import { useCounter } from "../hooks/useCounter.js";
import LoadingMessage from "./LoadingMessage.jsx";
import PokemonCard from "./PokemonCard.jsx";

function MultipleCustomHooks(props) {

    const {counter, increment, decrement} = useCounter(1);
    const {data, isLoading, hasError} =
        useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    return (
        <div className="container-primary">

            <h3 className="h3-primary">Pokemon Information</h3>
            <hr/>

            { isLoading ?
                <LoadingMessage/> :
                <PokemonCard id={ data.id }
                             name={ data.name }
                             sprites={[
                                 data.sprites.front_default,
                                 data.sprites.front_shiny,
                                 data.sprites.back_default,
                             ]}
                />
            }

            <button className="btn-primary"
                    onClick={ () => decrement() }
            >
                Previous
            </button>
            <button className="btn-primary"
                    onClick={ () => increment() }
            >Next
            </button>

            counter { counter }

        </div>
    );
}

export default MultipleCustomHooks;