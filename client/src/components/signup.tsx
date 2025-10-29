import React from "react"

export function Signup(){
    return(
        <div>
            <h1>Create your account</h1>
            <form action="">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" className="" />

                <label htmlFor="username">username: </label>
                <input type="text" id="username" name="username" className="" />

                <label htmlFor="password">password: </label>
                <input type="text" id="password" name="password" className="" />

                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}