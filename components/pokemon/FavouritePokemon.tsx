import React, { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { FavouritePokemonCard } from './FavouritePokemonCard';

interface Props{
    favsArr: number[];
}

export const FavouritePokemon: FC<Props> = ( { favsArr } ) => {
  return (
    <Grid.Container justify='flex-start' direction='row' gap={2}>
        {
            favsArr.map( id => (

                <FavouritePokemonCard key={ id }  pokemonId={ id } />

            ))
        }
    </Grid.Container>
  )
}
