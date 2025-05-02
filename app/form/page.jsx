"use client";

import { useState } from "react"

// const signUp = async (data) => {
//     const response = await fetch("/")
// }

export default function Page() {
    const inputs = ["email", "password", "username"]

    const [form, setForm] = useState({
        email: "",
        password: "",
        username: "",
    })

    const changeValue = (key, value) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (form.password.length < 8) {
            alert("weak password!");
        }
    }

    return (
        <div >
            <h1>signup form</h1>
            <div>
                <span>email:</span>
                {form.email}
            </div>
            <div>
                <span>password:</span>
                {form.password}
            </div>
            <div>
                <span>username:</span>
                {form.username}
            </div>
            <form onSubmit={submitForm}>
                {
                    inputs.map(input => <input type={input} onChange={(e) => changeValue(input, e.target.value)} />)
                }
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    )
}