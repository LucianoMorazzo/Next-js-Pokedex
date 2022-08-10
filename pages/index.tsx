import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image';
import { Layout } from '../components/layouts';
import { pokemonListResponse, smallPokemon } from '../interfaces';

interface Props {
  pokemons: smallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

 
  
  return (
   <Layout title="Pokemons">
      <ul>
        {pokemons.map( pkm => 
          <li>
            <h1>{pkm.name}</h1>
            <Image src={pkm.image} width={90} height={90}/>
          </li>
        )}
      </ul>
      
    
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
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
  })
  );

 
  console.log(pokemons);
  
  

  return {
    props:{
      pokemons
    }
  }
}
