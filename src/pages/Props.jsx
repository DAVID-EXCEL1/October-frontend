import React from 'react'
import Btn from './Btn'



// Props Example - Reusable Component
// Props are used to pass data from parent component to child component
// In this example, we are creating a reusable button component that can be used multiple times with different properties.

// Prop drilling - passing props from parent to child component through multiple levels of components. 
// parent -> child1 -> child2 -> child3 -> ... -> target child component

const Props = () => {
    const test1 = () => {
        alert("Fish");
    }
    const test2 = () => {
        alert("Meat");
    }
    const test3 = () => {
        alert("Vegetables");
    }
    const test4 = () => {
        alert("Fruits");
    }
    const test5 = () => {
        alert("Grains");
    }
    return (
        <div>
            <Btn title = "Edit" color="btn btn-primary" test={test1} />
            <Btn title = "Delete" color="btn btn-danger" test={test2} />
            <Btn title = "Update" color="btn btn-warning" test={test3} />
            <Btn title = "Clear" color="btn btn-success" test={test4} />
            <Btn title = "Save" color="btn btn-dark" test={test5} />
        </div>
    )
}

export default Props