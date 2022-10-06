
import Head from "next/head"
import { Navbar } from '../ui'

type Props = {
    children?: React.ReactNode,
    title?: String 
    favicon?: String
}

export const Layout: React.FC<Props>  = ({ children, title, favicon }) => {
    return(
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="Luciano Morazzo" ></meta>
                <meta name="description" content="xxxxx's information"></meta>
                <meta name='keywords' content="XXX, pokemon, pokedex"></meta>
                <link rel="icon" href={ favicon } type="image" />
            </Head>

            <Navbar />

            <main style={{padding: '20px 20px'}}>
                { children }
            </main>
        </>
    )
}