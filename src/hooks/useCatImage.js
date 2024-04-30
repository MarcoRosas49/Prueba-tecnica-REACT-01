import { useState, useEffect } from "react";

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'
//devuelve el image con el hecho
export function useCatImage ( {fact} ) {
    const [image, setImage] = useState();

    useEffect(() => {
        if (!fact) return;

        const firstWord = fact.split(' ')[0];
        //const threeFirstWords = fact.split(' ',3).join(' ')
        //console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${firstWord}`)
            .then(res => {
                const {url} = res
                setImage(url)
            });
    }, [fact]);

    console.log(image)

    return {image}
}