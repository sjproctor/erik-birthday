import React, { Component } from 'react'
import './App.css'
import pic1 from './assets/pic1.jpeg'
import pic2 from './assets/pic2.jpeg'
import pic3 from './assets/pic3.jpeg'
import pic4 from './assets/pic4.jpeg'
import pic5 from './assets/pic5.jpeg'
import pic6 from './assets/pic6.jpeg'
import pic7 from './assets/pic7.jpeg'
import pic8 from './assets/pic8.png'

class App extends Component {
  render() {
    return (
      <>
        <div class="parallax">
          <div class="heading">
            <p>- M A R C H  &nbsp; 1 4, &nbsp; 1 9 8 1 -</p>
            <h1>Happy 40th Birthday Erik</h1>
          </div>
        </div>
        <nav>Pics from: <a href="JL">Jamie Lynn</a></nav>
        <div className="main">
          <img src={ pic1 } alt="Erik" className="pictures" />
          <img src={ pic2 } alt="Erik" className="pictures" id="JL" />
          <img src={ pic3 } alt="Erik" className="pictures" id="JL" />
          <img src={ pic4 } alt="Erik" className="pictures" id="JL" />
          <img src={ pic5 } alt="Erik" className="pictures" />
          <img src={ pic6 } alt="Erik" className="pictures" />
          <img src={ pic8 } alt="Erik" className="pictures" />
          <img src={ pic7 } alt="Erik" className="pictures" />
        </div>
      </>
    )
  }
}
export default App
