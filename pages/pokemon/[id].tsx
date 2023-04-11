import React, { useEffect, useState } from 'react'
import { NextPage, GetStaticPaths, GetStaticProps  } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { Layout } from '../../components/layouts';
import { pokemon } from '../../interfaces/pokemonFull';
import { localFavourites } from '../../utils';
import confetti from 'canvas-confetti';
import getPokemonInfo from '../../utils/getPokemonInfo';
import { redirect } from 'next/dist/server/api-utils';



interface Props {
  pokemon: pokemon;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => { 
  
  const [isInFavourites, setIsInFavourites] = useState( false );

  useEffect( () => {
    setIsInFavourites( localFavourites.existInFavourites( pokemon.id ))
  }, [ pokemon.id ])
  
  const onToggleFavourite = () => {
    localFavourites.toggleFavourite(pokemon.id);
    setIsInFavourites( !isInFavourites );

    if( isInFavourites ) return;

    confetti({
      zIndex: 999,
      particleCount:100,
      spread:160,
      angle:-100,
      origin: {
        x: 1,
        y: 0
      }
    })

  }

  return (
    <Layout title='pokemonPage' favicon={pokemon.sprites.versions?.['generation-v']['black-white'].animated?.front_default}>
      <Grid.Container css={{ marginTop: '5px'}} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
            <Card isHoverable css={{ padding: '30px'}}>
              <Card.Body>
                <Card.Image 
                  src={pokemon.sprites.other?.['official-artwork'].front_default|| '/no-image.png'}
                  alt={ pokemon.name }
                  width= "100%"
                  height={ 400 }
                >
                </Card.Image>
              </Card.Body>
            </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1>{ pokemon.name }</Text>
              <Button
                color='gradient'
                ghost={ isInFavourites }
                onPress={ onToggleFavourite }
              >
                { isInFavourites? 'Favourite': 'Add to favourites'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={ 30 }>
                Sprites:
              </Text>
              <Container direction='row' display='flex' gap={ 0 }>
                <Image
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.sprites.front_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                  <Image
                  src={ pokemon.sprites.back_shiny}
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container >
    </Layout>
  )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map( (value, index) => `${ index + 1 }`);

  
  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
} 

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo( id );

  if( !pokemon ){
    return{
      redirect:{
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props:{
      pokemon
    },
    revalidate: 86400,
  }
}


export default Pokemon;