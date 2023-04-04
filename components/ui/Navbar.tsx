import { Image, Link, Text, useTheme } from "@nextui-org/react";
import NextLink from 'next/link';

export const Navbar = () => {

    const { theme } = useTheme();
    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                backgroundColor: 'purple'
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
        </div>
    )
}