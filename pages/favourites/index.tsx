import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavouritePokemon } from '../../components/pokemon/FavouritePokemon';
import { Nofavourites } from '../../components/ui';
import { pokemon } from '../../interfaces/pokemonFull';
import { localFavourites } from '../../utils';

interface Props {
    pokemon: pokemon
}

const Favourites = () => {

    const [favouritesArr, setfavouritesArr] = useState<number[]>([])

    useEffect(() => {
        
     setfavouritesArr(localFavourites.getFavouritesArray()); 
    
    }, [])
    
    return(
        <Layout title="favourites-page" favicon='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/319/star_2b50.png'>
            {
                favouritesArr.length === 0 
                ?
                (<Nofavourites />)
                :
                ( <FavouritePokemon favsArr={ favouritesArr } /> )

            }
            
        </Layout>
    )
}

export default Favourites;


