import React from 'react'
import logo from "../assets/recyglo_logo.png"
import { FaArrowDown } from "react-icons/fa6"
import './Apple.css'

function Apple() {

    return (
        <div class="apple-container">
            <img src={logo} alt="Logo" class="logo" />

            <div class="wrap-text">
                <div class="header">
                    <p>Apple Inc.</p>
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
                                    <a href="">Waste 1</a>
                                    <a href="">Waste 2</a>
                                    <a href="">Waste 3</a>
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

export default Apple