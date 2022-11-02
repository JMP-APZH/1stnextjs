import { useRouter } from 'next/router'

import Head from 'next/head'

export default function Car({ car }) {

    const router = useRouter()
    const { id } = router.query

    return (<>
        <Head>
            <title>{car.color} {car.id}</title>
        </Head>
        <h1>Hi {id}</h1>
        <img 
            src={car.image} 
            height={400}
            width={600}
            />
    </>)
    
}


export async function getServerSideProps({ params }) {

    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}

