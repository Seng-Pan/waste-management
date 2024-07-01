import React from 'react'
import logo from "../assets/recyglo_logo.png"
import { FaArrowDown } from "react-icons/fa6"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import './Apple.css'

function CpAll() {
    const navigate = useNavigate();

    const clickbackarrow = async () => {
        navigate("/Company")
    }

    const clickeatery = async () => {
        navigate("Resident")
    }

    return (
        <div class="apple-container">

            <div class="back-arrow" onClick={clickbackarrow}>
                <FaArrowAltCircleLeft />
            </div>

            <img src={logo} alt="Logo" class="logo" />

            <div class="wrap-text">

                <div class="header">
                    <p>CP All Public Co.Ltd</p>
                </div>

                <form class='form'>
                    <div class='form-section'>
                        <div class="lb-formgp">
                            <label for="employee-name">Employee name</label>
                            <input type="text" id="employee-name" class="input" />
                        </div>

                        <div class="form-group">
                            <p>Comp.Type</p>

                            <div class="dropdown">
                                <button class="dropbtn">
                                    <div class="sel">
                                        <span>Select</span>
                                        <FaArrowDown />
                                    </div>
                                </button>

                                <div class="dropdown-content">
                                    <a href="" onClick={clickeatery}>Eatery</a>
                                    <a href="" onClick={clickeatery}>Resident</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="next-button">Next</button>
                </form>
            </div>

        </div>
    )
}

export default CpAll