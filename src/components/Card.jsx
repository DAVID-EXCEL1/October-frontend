import React from 'react'
import myCardImage from "../assets/react.svg"
import Button from './Button'

const Card = () => {
    return (

        <div>

            <div className="card w-25" style={{ width: "18rem" }}>
                <img src={myCardImage} className="card-img-top" style={{ width: "100px" }} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Card