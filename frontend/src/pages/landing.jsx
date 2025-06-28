import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>ClearRTC</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1 className="headline-orange"><span style={{ color: "#FF9839" }}>Connect in Real-Time, From Anywhere.</span></h1>
                    <h1 className="subline-white">Secure and seamless video communication with</h1>

                    <h1><span style={{ color: "#FF9839" }}>ClearRTC</span></h1>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>

                    </div>



                </div>

                <div>

                    <img src="/mobile2.png" alt="video calll" />

                </div>

            </div>
            <footer className="footer">
                © 2025 ClearRTC · Made by Bal Mukund Pandey
            </footer>

        </div>

    )
}