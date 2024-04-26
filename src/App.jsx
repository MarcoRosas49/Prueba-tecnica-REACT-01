import { useEffect } from "react"
import { useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`

export function App () {

    const [fact, setFact] = useState()
    const [image, setImage] = useState()

    //Para recuperar la palabra al cargar la página
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then( data => {
            const {fact} = data
            setFact(fact)
        })
    }, [])

    useEffect(() => {

        if(!fact) return
        const firstWord = fact.split(' ')[0]
        
        fetch(`https://cataas.com/cat/says/${firstWord}`)
        .then(res => setImage(res.url))
        
    }, [fact])



    return (
        <main>
            <h1>App de gatitos</h1>

            <section>
            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={`Image using the first letter for ${fact}`} />}

            </section>
        </main>
    )
}