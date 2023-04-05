import { Image, Link, Text, useTheme } from "@nextui-org/react";
import NextLink from 'next/link';

export const Navbar = () => {

    const { theme } = useTheme();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: theme?.colors.purple100.value,
                padding: '0 20px'
            }}
        >
            <NextLink href="/" passHref>
                <Link>
                    <div style={{ display: 'flex', alignItems:'center'}}>
                        <Image
                            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'}
                        />
                        <Text color="white" h2>P</Text>
                        <Text color="white" h3>okemon</Text>
                    </div>
                </Link>
            </NextLink>

            <NextLink href="/favourites" passHref>
                <Link>
                    <div style={{ display: 'flex', alignItems:'center', fontSize: '10px'}}>
                        <Text color="white" >Favourites</Text>
                    </div>
                </Link>
            </NextLink>
        </div>
    )
}