import React from 'react'
import data from '../memesData'

export default function Meme() {
  const originalMemeState = {
    topText: "",
    bottomText: "",
    image: randomImage()
  }
  const [meme, setMeme] = React.useState(originalMemeState)

  function handleMemeChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: name === 'image' ? data.data.memes[randomNumber(100)].url : value
    })
    )
  }

  function randomNumber(range) {
    return Math.round(Math.random() * range)
  }

  function randomImage() {
    return data.data.memes[randomNumber(100)].url
  }

  return (
    <div className="page-width">
      <form action="#" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Top line"
          value={meme.topText}
          onChange={handleMemeChange}
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom line"
          value={meme.bottomText}
          onChange={handleMemeChange}
          name="bottomText"
        />
        <button
          onClick={handleMemeChange}
          name="image"
        >
          Get a new meme image
        </button>
        <div className="meme-wrapper">
          <img src={meme.image} alt="" className="meme-image" />
          <h2 className='top-text'>{meme.topText}</h2>
          <h2 className='bottom-text'>{meme.bottomText}</h2>
        </div>
      </form>
    </div>
  )
}

