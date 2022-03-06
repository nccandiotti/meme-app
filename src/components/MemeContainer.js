import React, { useContext } from "react"
import MemeCard from "./MemeCard"
import { MyMemeGrid } from "./Styles/MyMemeContainer.styled"
import { MemeContext } from "./MemeContext"

function MemeContainer() {
  const { filteredMemeTitles } = useContext(MemeContext)
  const createMemeCards = filteredMemeTitles.map((meme) => (
    <MemeCard
      key={meme.id}
      id={meme.id}
      name={meme.name}
      url={meme.url}
      width={meme.width}
      height={meme.height}
    />
  ))
  return (
    <MyMemeGrid>
      <>{createMemeCards}</>
    </MyMemeGrid>
  )
}

export default MemeContainer
