import React, { useState } from 'react'

const Practice = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [allUsers, setAllUsers] = useState([])


    const submitUser = () => {
        let userData = {
            firstName,
            lastName,
            email,
            password,
            age
        }
        // setAllUsers([...allUsers, userData]);
        // console.log(userData);
        let newAllUsers = [...allUsers, userData];
        setAllUsers(newAllUsers);
        console.log(newAllUsers);

        // Spread Operator Examples
        // let fruits = ['Mango', 'Banana', 'Orange', 'Grapes']
        // let newFruits = [...fruits, "Pineapple", "Watermelon"];
        // console.log(newFruits);
    }

    const [editMode, setEditMode] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null)

    const deleteUser = (index) => {
        // Delete user at given index
        // the filter method creates a new array with all elements that pass the test implemented by the provided function.
        // allUsers.filter((_, i) => i !== index) means that we are creating a new array that includes all users except the one at the specified index.
        // the underscore (_) is used as a placeholder for the first parameter (the current element), which we don't need in this case. 
        // what could replace the underscore is user or any other name.
        const newUsers = allUsers.filter((_, i) => i !== index)
        setAllUsers(newUsers)
    }

    const editUser = (index) => {
        setEditMode(true)
        setEditingIndex(index)
        const user = allUsers[index]
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setPassword(user.password)
        setAge(user.age)
    }

    const updateUser = () => {
        const updatedUsers = [...allUsers]
        updatedUsers[editingIndex] = {
            firstName,
            lastName,
            email,
            password,
            age
        }
        setAllUsers(updatedUsers)
        setEditMode(false)
        setEditingIndex(null)
        // Clear form
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setAge('')
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Practice Page</h1>

            <form className="mb-4">
                <div className="row g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter your age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="col-md-8 d-flex align-items-end">
                        <button 
                            type="button" 
                            className="btn btn-primary w-100" 
                            onClick={editMode ? updateUser : submitUser}
                        >
                            {editMode ? 'Update User' : 'Submit User'}
                        </button>
                    </div>
                </div>
            </form>

            <div className="row">
                {allUsers.map((user, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                                <p className="card-text mb-1"><strong>Email:</strong> {user.email}</p>
                                <p className="card-text mb-1"><strong>Password:</strong> {user.password}</p>
                                <p className="card-text"><strong>Age:</strong> {user.age}</p>
                                <div className="mt-2">
                                    <button 
                                        className="btn btn-warning me-2" 
                                        onClick={() => editUser(index)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-danger" 
                                        onClick={() => deleteUser(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Practice