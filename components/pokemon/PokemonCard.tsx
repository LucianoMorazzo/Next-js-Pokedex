import { FC } from "react";
import { smallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
    pokemon: smallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const {id, image, name} = pokemon;

    return(
        <>
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 }  key={ id }>
          <Card isHoverable isPressable>
              <Card.Header>
                <Row justify='space-between'>
                  <Text>#{ id }</Text>
                  <Text transform='capitalize'>{ name }</Text>
                </Row>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ p: 1 }}>
                <Card.Image 
                  src={ image } 
                  width="100%" 
                  height={ 140 }
                />
              </Card.Body>
          </Card>
        </Grid>
        </>
    )
}