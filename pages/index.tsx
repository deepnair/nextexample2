import type { GetStaticProps, NextPage } from 'next'
import { imageLoader } from '../imageLoader'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Character } from '../types'
import Link from 'next/link'
import ImageContainer from '../components/ImageContainer'

const Home: NextPage<{characters: Character[]}> = ({characters}) => {

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Static Generated Characters</h2>
        <ImageContainer characters={characters} idlessthan={4} idgreaterthan={0} linktype='static'/>
        <h2 className={styles.sectionTitle}>Dynamically Generated Characters</h2>
        <ImageContainer characters={characters} idlessthan={21} idgreaterthan={17} linktype='dynamic'/>
        
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const {results} = await res.json()
  return{
    props:{
      characters: results
    }
  }
}

export default Home
