import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

// React Hooks - useState useEffect, useContext
const Home = () => {

// const [variablename, functiontochangeyourvariablename] = useState(initialvalueforyourvariablename)
const [myAge, setMyAge] = useState(12)
const [myName, setNyName] = useState("Adedayo")
const [isStudent, setIsStudent] = useState(true)

    
    const increaseBtn = () => {
        setMyAge(myAge / 2)
        setNyName("Israel")
    }
    const decreaseBtn = () => {
        setMyAge(myAge - 1)
        setNyName("Iyabo Ojo")
    }
    return (
        <div>
            <h1>This is my home page</h1>
            <p>click the button below to register</p>
            <Button />
            <Card />


            <button onClick={() => increaseBtn()}>
                Increase
            </button>
            <p >{myAge}</p>
            <p>{myName}</p>
            <button onClick={decreaseBtn}>
                Decrease
            </button>
        </div>
    )
}

export default Home