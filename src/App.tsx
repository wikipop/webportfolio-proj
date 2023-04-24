import "./style.scss"
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {FaGithub, FaInstagram} from "react-icons/fa";

function App() {

    const buttonAction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    const sliderRef = useRef(document.createElement("div"))
    const [slider, setSlider] = useState(sliderRef.current.offsetLeft)
    const [isReadyCtx, setIsReadyCtx] = useState(false)

    const easeInOutQuad = (currentTime: number, start: number, change: number, duration: number) => {
        currentTime /= duration / 2
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start
        }
        currentTime--
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
    }

    const animateMoveTo = (element: HTMLElement, to: number, duration: number) => {
        if (element.offsetLeft === to) return

        const start = element.offsetLeft
        const change = to - start
        const increment = 10
        let currentTime = 0

        const animateScroll = () => {
            currentTime += increment
            element.style.left = easeInOutQuad(currentTime, start, change, duration) + "px"
            if (currentTime < duration) {
                setTimeout(animateScroll, increment)
            }
        }
        animateScroll()
    }

    const handleNavClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault()
        setSlider(e.currentTarget.offsetLeft)
    }

    const NavElement = ({name, link}: {name: string, link: string}) => {
        return (
            <li onClick={handleNavClick}> <a href={link}> {name} </a></li>
        )
    }

    useEffect(() => {
        setSlider(sliderRef.current.offsetLeft)
        setIsReadyCtx(true)
    }, [])

    useEffect(() => {
        if (isReadyCtx) {
            animateMoveTo(sliderRef.current, slider, 500)
        }
    }, [slider])

    return (
        <>
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
                            <div className="dots"/>
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
                <div className="add">
                    <div className="dots-bottom">
                        <div className="dot"/>
                        <div className="dot"/>
                        <div className="dot"/>
                    </div>
                    <div className="icons">
                        <a><FaGithub/></a>
                        <a><FaInstagram/></a>
                    </div>
                </div>
        </header>
        <div className="content"></div> 
    </>
  )
}

export default App
