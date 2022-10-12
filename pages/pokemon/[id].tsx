import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { NextPage, GetStaticPaths, GetStaticProps  } from 'next';
import React from 'react'
import { Layout } from '../../components/layouts';
import { pokemon } from '../../interfaces/pokemonFull';



interface Props {
  pokemon: pokemon;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {  

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
                  ghost
                >
                  Guardar en Favoritos
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
    fallback: false
  }
} 

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const res = await fetch(url);

  const data = await res.json();
  

  return {
    props:{
      pokemon: data
    }
  }
}


export default Pokemon;