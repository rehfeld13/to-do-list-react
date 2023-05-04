import './Header.css'

import rocketLogo from '../assets/rocket.svg'

export function Header(){
  return(
    <header className="header">
      <img src={rocketLogo} alt="Logotipo Rocket" />
      <div>
        <h1>to</h1>
        <span>do</span>
      </div>
    </header>
  )
}