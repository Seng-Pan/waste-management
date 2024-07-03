import React from 'react'
import logo from "../assets/recyglo_logo.png"
import { FaArrowDown } from "react-icons/fa6"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import './Resident.css'

function Resident() {
    const navigate = useNavigate();

    const clicktoback = async () => {
        navigate("/Company/Apple")
    }

    const result = async () =>{
        navigate("/Company/Apple/Resident/Result")
    }


    return (
        <div class="resident-container">
            <div class="back-arrow-two" onClick={clicktoback}>
                <FaArrowAltCircleLeft />
            </div>

            <div class="resident-header">
                <img src={logo} alt="Logo" class="logo-two" />
            </div>

            <div class="form-container">
                <p>Waste Type</p>
                <div class="dropdown">
                    <button class="dropbtn">
                        <div class="sel">
                            <span>Select</span>
                            <FaArrowDown />
                        </div>
                    </button>

                    <div class="dropdown-content">
                        <a href="" class="apple-content">Waste 1</a>
                        <a href="" class="apple-content">Waste 2</a>
                        <a href="" class="apple-content">Waste 3</a>
                    </div>
                </div>

                <label for="electricity-bill">Electricity Bill</label>
                <input type='file' id="electricity-bill" name="electricity-bill"
                    accept='.pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx,.csv,.ppt,.pptx,.gif,.svg' />

                <label for="customer-counts">Customer Counts</label>
                <input type='number' id='customer-counts' name='customer-counts' />

                <div class="packaging-amount-container">
                    <div>
                        <label for="packaging-use">Packaging Use</label>
                        <input type="text" id='packaging-use' name='packaging-use' />
                    </div>

                    <div>
                        <label for="amount">Amount</label>
                        <input type='number' id='amount' name='amount' />
                    </div>
                </div>

            </div>

            <div class='preview-container'>
                <div class="preview-box">Electric Bill Preview</div>
            </div>

            <button onClick={result} class="nextbtn">Next</button>

        </div>
    )
}

export default Resident
