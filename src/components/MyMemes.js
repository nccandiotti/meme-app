import React, { useState, useEffect } from "react"
import MyMemesContainer from "./MyMemesContainer"

function MyMemes({ setMyMemesArray }) {
  const [myMemes, setMyMemes] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/NewMemes")
      .then((response) => response.json())
      .then(setMyMemes)
  }, [])
  return (
    <>
      <MyMemesContainer myMemes={myMemes} />
    </>
  )
}

export default MyMemes
