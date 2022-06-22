import { GetServerSideProps } from 'next'
import React from 'react'
import { Character } from '../../../../types'
import styles from '../../../../styles/staticCharacter.module.css'
import Image from 'next/image'
import { imageLoader } from '../../../../imageLoader'
import Link from 'next/link'

const index = ({character}: {character: Character}) => {
  return (
    <div className={styles.container}>
        <Image 
            loader={imageLoader}
            unoptimized
            height='200px'
            width='200px'
            src={character.image}
            alt={character.name}
        />
        <p>{character.name}</p>
        <Link href="/">
            <a>
                <p>Back</p>
            </a>
        </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
    const result = await res.json()

    return{
        props:{
            character: result
        }
    }
}

export default index