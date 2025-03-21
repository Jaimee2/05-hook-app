import React from 'react';

function PokemonCard({id, name, sprites = []}) {
    return (
        <div className=" border border-amber-400 flex justify-center p-10 m-4">

            <div className="flex flex-col justify-center">

                <h3 className="h3-primary text-center">#{ id } - { name }</h3>

                <div className="flex flex-row">

                    { sprites.map(sprite => (
                            <img className="w-[200px] border border-amber-200 rounded-full m-1 hover:bg-amber-50"
                                 key={ sprite }
                                 src={ sprite }
                                 alt={ sprite }
                            />

                        )
                    ) }
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;