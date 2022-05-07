import logo from '../images/troll.png'

export default function Header() {
  return (
    <header>
      <div className="page-width">
        <div className="left-col">
          <img src={logo} alt="meme logo" className="logo" />
          <h1>Meme Generator</h1>
        </div>
      </div>
    </header>
  )
}
