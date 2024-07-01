import React from 'react'
import "./sel_company.css"
import { FaArrowDown } from "react-icons/fa6"
import { useNavigate } from 'react-router-dom';

function Company() {
    const navigate = useNavigate();

    const clickapple = async () => {
        navigate("Apple")
    }

    const clickCPALL = async () => {
        navigate("CpAll")
    }

    const clickMinion = async () => {
        navigate("Minion")
    }

    return (

        <div class="company-container">

            <div class="ctext-container">
                <p class="com-text">Your Company</p>
            </div>

            <div class="dropdown">
                <button class="dropbtn">
                    <div class="sel">
                        <span>Select</span>
                        <FaArrowDown />
                    </div>
                </button>

                <div class="dropdown-content">
                    <a href="" onClick={clickapple}>Apple</a>
                    <a href="" onClick={clickCPALL}>CPALL</a>
                    <a href="" onClick={clickMinion}>Minion</a>
                </div>
            </div>

        </div>

    )
}

export default Company