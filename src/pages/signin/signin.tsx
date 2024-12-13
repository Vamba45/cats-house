import {React} from 'react';
import './signin.scss';

export const Signin = () => {
    return ( 
        <div className="signin">
            <div className="container">
                <div className="signin__row">
                    <div className="signin__column">
                        <h1 className="signin__title">Вход</h1>
                    </div>
                    <div className="signin__column">
                        <form action="#" method="POST" className="signin__form">
                            <input type="text" className="signin__login" />
                            <input type="password" className="signin__password" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}