import "./style.scss"
import React from "react";

function App() {

    const buttonAction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    return (
    <header>
        <nav>
            <ul>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/about">About</a> </li>
                <li> <a href="/contact">Contact</a> </li>
            </ul>
        </nav>
        <main>
                <div className="title">
                    <div>
                        <h1> Hello World </h1>
                        <h2> Wiktor Popiołek </h2>
                        <h3> Web developer </h3>
                    </div>
                    <div>
                        <button onClick={buttonAction}>Action 1</button>
                        <button onClick={buttonAction}>Action 2</button>
                    </div>
                </div>
                <div className="photo">
                    <div className="first-circle">
                        <img src="https://cdn.discordapp.com/avatars/393756120952602625/2caac8389fb62044770e1ac81fdbbc60.webp?size=320"
                             alt="profile picture"
                        />
                    </div>
                </div>
        </main>
    </header>
  )
}

export default App
