import { FC } from "react";
import { smallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from "next/router";

interface Props {
    pokemon: smallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const {id, image, name} = pokemon;

    const router = useRouter();

    const onClick = () => {
      router.push(`/pokemon/${ id }`);
    }

    return(
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } >
          <Card 
            isHoverable 
            isPressable
            onClick={ onClick }
          >
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
    )
}