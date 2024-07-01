import React from 'react'
import logo from '../assets/recyglo_logo.png'
import './Result.css'

function Result() {

    return (
        <>
            <div class="container">
                <header>
                    <div class="company-info">
                        <h1>Company name</h1>
                        <p>XX/XX Address rd. Address province, XXXXX, Address</p>
                    </div>
                    <img src={logo} alt="Logo" class="logo" />
                </header>

                <main>
                    <div class="calculation-box total" >
                        <p>This is your Total Carbon Footprint Calculation</p>
                    </div>
                    <div class="both-scope">
                        <div class="calculation-box12 scope1">
                            <p>This is your Scope 1 Carbon Footprint Calculation</p>
                        </div>
                        <div class="calculation-box12 scope2">
                            <p>This is your Scope 2 Carbon Footprint Calculation</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Result