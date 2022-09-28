import { Card, Grid, Row, Text } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon/PokemonCard';
import { pokemonListResponse, smallPokemon } from '../interfaces';

interface Props {
  pokemons: smallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

 
  
  return (
   <Layout title="Pokemons">

    <Grid.Container gap={ 2 } justify='flex-start'>
      {pokemons.map( pokemon => 
        <PokemonCard pokemon={ pokemon }  />
      )}
    </Grid.Container>
      
   </Layout>
  )
}

export default HomePage;


export const getStaticProps: GetStaticProps = async (ctx) => {



  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  const res = await fetch( url );

  const data: pokemonListResponse = await res.json();

  const pokemons: smallPokemon = data.results.map( (pkm, i) => ({
    ...pkm,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
    
  })
  );

 
  // console.log(pokemons);
  
  

  return {
    props:{
      pokemons
    }
  }
}
