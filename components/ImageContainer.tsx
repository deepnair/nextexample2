import { Character } from "../types"
import styles from "../styles/ImageContainer.module.css"
import Image from "next/image"
import { imageLoader } from "../imageLoader"
import Link from "next/link"


const ImageContainer = ({characters, idgreaterthan, idlessthan, linktype}:{characters: Character[], idlessthan: number, idgreaterthan: number, linktype: string}) => {
  return (
    <div className={styles.staticImagesContainer}>
          {characters.filter((character) => character.id < idlessthan && character.id > idgreaterthan).map((character) => {
            return (<div key={character.id}>
              <Image
                loader={imageLoader}
                unoptimized
                alt={character.name}
                src={character.image}
                height='200px'
                width='200px'
              />
              <Link href={`character/${linktype}/${character.id}`}>
                <a>
                <p>{character.name}</p>
                </a>
              </Link>
            </div>)
          })}
        </div>
  )
}

export default ImageContainer