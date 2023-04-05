
import Head from "next/head"
import { Navbar } from '../ui'
import { useRouter } from "next/router"

type Props = {
    children?: React.ReactNode,
    title?: string 
    favicon?: string
    description?: string
}

export const Layout: React.FC<Props>  = ({ children, title, favicon, description }) => {

    const origin =  (typeof window === 'undefined') ? '' : window.location.origin;

    console.log(origin);
    

    return(
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content="Luciano Morazzo" ></meta>
                <meta name="description" content={`${description}`}></meta>
                <meta name='keywords' content={`${ title }, pokemon, pokedex`}></meta>
                <link rel="icon" href={ favicon } type="image" />
                <meta property="og:url" content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
                <meta property="og:title" content="When Great Minds Don’t Think Alike" />
                <meta property="og:description" content={`${ description }`} />
                <meta property="og:image" content={`${origin}/img/banner.png`}  />
            </Head>

            <Navbar />

            <main style={{padding: '20px 20px'}}>
                { children }
            </main>
        </>
    )
}