'use client'

import Link from "next/link";
import { SetStateAction, useState } from "react";

export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const isDisabled = login === '' || password === '';

    const handleLoginChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Действия при отправке формы
    };

    return (
        <div className='login_window'>
            <h1>Login</h1>
            <form className='login_form' onSubmit={handleSubmit}>
                <div className='login_input'>
                    <label htmlFor='login'>Login</label>
                    <input name='login' type='text' placeholder='Enter login' value={login} onChange={handleLoginChange} />
                </div>
                <div className='password_input'>
                    <label htmlFor='password'>Password</label>
                    <input name='password' type="password" placeholder='Enter password' value={password} onChange={handlePasswordChange} />
                </div>
                <div className='btn_section'>
                    <Link href='/signup'>
                        <button className="btn_login" type='submit'>
                            Sign up
                        </button>
                    </Link>
                    {/* <button className={`btn_login ${isDisabled ? 'disabled' : ''}`} type='submit' disabled={isDisabled}>
                        <Link href='/home'>
                            Login
                        </Link>
                    </button> */}
                    <Link href={isDisabled ? '#' : '/home'}>
                        <button className={`btn_login ${isDisabled ? 'disabled' : ''}`} type='submit' disabled={isDisabled}>
                            Login
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}