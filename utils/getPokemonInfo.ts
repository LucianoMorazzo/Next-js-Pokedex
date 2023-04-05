const getPokemonInfo =  async ( nameOrId: string )  => {

  

  const pokeurl = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;

  const res = await fetch(pokeurl);

  const { id, name, sprites, species:{ url } } = await res.json();

  const pokeEntryUrl = url;

  const entryRes = await fetch(pokeEntryUrl);

  const { flavor_text_entries:{0: flavor_text } } = await entryRes.json();

  const flavor = flavor_text;
  
  const final_entry = flavor.flavor_text.replace(/(\r\n|\n|\r)/gm, "").replace(/\\n/g, '\n').replace(/\\f/g, '\f').replace(/\\\\/g, '\\');

  return {
    id,
    name,
    sprites,
    final_entry
  }
  
}


export default getPokemonInfo;