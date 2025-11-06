import React from 'react'

const Btn = ({title, color, test}) => {
    console.log(title);
    console.log(color);

    return (
        <>
            <button className={color} onClick={test}>
                {title}
            </button>
        </>
    )
}

export default Btn