import { Container, Image, Text } from '@nextui-org/react'


export const Nofavourites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)'

    }}>
        <Text>No favourite pokemons added</Text>
        <Image
            src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNlMTViYTNkMzljNzA5NTdmODFiYTc4YmI0Yjc0NDdkM2RmNzU0OCZjdD1n/7SF5scGB2AFrgsXP63/giphy.gif'
            width={250}
            height={250}
            css={{
                borderRadius: 150,
            }}
        />
             
    </Container>
  )
}
