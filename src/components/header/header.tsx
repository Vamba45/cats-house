import  { React, FC } from 'react';
import './header.scss';
import logo from '../../assets/logo.png';

export const Header : FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__column">
                        <a className="header__logo" href="/">
                            <img src={logo} alt="logo-header" />
                            <p>Кошкин дом</p>
                        </a>
                    </div>
                    <div className="header__column">
                        <a href="/login" className="header__login">вход</a>
                        <a href="/registration" className="header__registration">регистрация</a>
                    </div>
                </div>
            </div>
        </header>
    )
}