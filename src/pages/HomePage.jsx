import React from 'react'
import './home.css'
import logo from "../assets/recyglo_logo.png"
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();

    const clickgetstarted = async() =>{
        navigate("/Company")
    }

    return (
        <>
            <div class="container">

                <div class="logo_container">
                    <img src={logo} alt="Logo" />
                </div>

                <p>Welcome! User_1</p>
                <button class="start-btn" onClick={clickgetstarted}>Get Started</button>

            </div>

        </>
    )
}

export default HomePage

