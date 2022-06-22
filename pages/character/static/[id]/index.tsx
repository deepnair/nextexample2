import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { imageLoader } from '../../../../imageLoader'
import { Character } from '../../../../types'
import styles from '../../../../styles/staticCharacter.module.css'

const index = ({character}: {character:Character}) => {
  return (
    <div className={styles.container}>
        <Image
            src={character.image}
            alt={character.name}
            width='200px'
            height='200px'
            unoptimized
            loader={imageLoader}
        />
        <p>{character.name}</p>
        <Link href='/'>
            <a>Back</a>
        </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context!.params!.id!
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const result = await res.json()

    return{
        props:{
            character: result
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    
    const paths = []
    
    for(let i=0; i<4; i++){
        paths.push({params:{id:i.toString()}})
    }

    return {
        paths: paths,
        fallback: false
    }
}



export default index