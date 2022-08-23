import React from 'react';
import LoginForm from '../component/LoginForm';
import {GoToMainBtn} from '../component/Btns';

function LoginPage() {
    return (
        <div className='mainContainer'>
            <GoToMainBtn />
            <LoginForm />
        </div>
    );
}

export default LoginPage;