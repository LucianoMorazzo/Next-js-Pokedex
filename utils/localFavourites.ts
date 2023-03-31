const toggleFavourite = (id: number ) => {
    
    console.log("favoritos llamado");
    
    let favourites: number[] = JSON.parse( localStorage.getItem('favourites') || '[]' )

    if( favourites.includes( id )){
        favourites = favourites.filter( pokeId => pokeId != id )
    }else{
        favourites.push( id );
    }

    localStorage.setItem( 'favourites', JSON.stringify(favourites) );
}


const existInFavourites = ( id: number ): boolean => {


    const favourites: number[] = JSON.parse( localStorage.getItem('favourites') || '[]' )

    return favourites.includes( id ); 
}


const getFavouritesArray = (): number[] => {
    return JSON.parse( localStorage.getItem('favourites') || '[]');
}

export default{
    toggleFavourite,
    existInFavourites,
    getFavouritesArray
}