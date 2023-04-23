import "./style.scss"
import React, {useEffect, useRef, useState} from "react";

function App() {

    const buttonAction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    const sliderRef = useRef(document.createElement("div"))
    const [slider, setSlider] = useState(sliderRef.current.offsetLeft)

    useEffect(() => {
        setSlider(sliderRef.current.offsetLeft)
    }, [])

    useEffect(() => {
        sliderRef.current.style.left = slider + "px"
    }, [slider])

    const handleNavClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault()
        setSlider(e.currentTarget.offsetLeft)
    }

    const NavElement = ({name, link}: {name: string, link: string}) => {
        return (
            <li onClick={handleNavClick}> <a href={link}> {name} </a></li>
        )
    }

    return (
    <header>
        <nav>
            <ul>
                <NavElement name="Home" link="/"/>
                <NavElement name="About" link="/about"/>
                <NavElement name="Contact" link="/contact"/>
                <div className="slide" ref={sliderRef}/>
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
