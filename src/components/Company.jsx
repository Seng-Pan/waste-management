import React from 'react'
import "./sel_company.css"
import {FaArrowDown} from "react-icons/fa6"
import { useNavigate } from 'react-router-dom';

function Company() {
    const navigate = useNavigate();

    const clickapple = async() =>{
        navigate("Apple")
    }

    return (
        
            <div class="company-container">

                <p>Your Company</p>

                <div class="dropdown">
                    <button class="dropbtn">
                        <div class="sel">
                            <span>Select</span>
                            <FaArrowDown/>
                        </div>
                    </button>
                    
                    <div class="dropdown-content">
                        <a href="" onClick={clickapple}>Apple</a>
                        <a href="">CPALL</a>
                        <a href="">Minion</a>
                    </div>
                </div>

            </div>
        
    )
}

export default Company