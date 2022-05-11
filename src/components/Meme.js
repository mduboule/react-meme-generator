import React from 'react'

export default function Meme() {
  const originalMemeState = {
    topText: "",
    bottomText: "",
    image: ""
  }

  const [meme, setMeme] = React.useState(originalMemeState)
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    const getMemes = async () => {
      const result = await fetch('https://api.imgflip.com/get_memes')
      const dataJson = await result.json()
      setAllMemes(dataJson.data.memes)
    }
    getMemes()
  }, [])

  function handleMemeChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: name === 'image' ? randomImage() : value
    })
    )
  }

  function randomNumber(range) {
    return Math.round(Math.random() * range)
  }

  function randomImage() {
    return allMemes[randomNumber(100)].url
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

