const getPokemonInfo =  async ( nameOrId: string )  => {

  try {

    const pokeurl = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

    const res = await fetch(pokeurl);

    const { id, name, sprites, species:{ url } } = await res.json();

    // const pokeEntryUrl = url;

    // const entryRes = await fetch(pokeEntryUrl);

    // const { flavor_text_entries:{0: flavor_text } } = await entryRes.json();

    // const flavor = flavor_text.flavor_text[flavor_text];


  

    return {
      id,
      name,
      sprites
    }
  
  } catch (error) {
    return null;
  }

}


export default getPokemonInfo;