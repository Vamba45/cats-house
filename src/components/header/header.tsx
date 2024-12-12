import  { React, FC } from 'react';
import './header.scss';

export const Header : FC = () => {
    return (
        <header className="header">
            <div className="header__row">
                <div className="header__column header__logo">
                    <a href="/">logo</a>
                </div>
                <div className="header__column">
                    <a href="/login" className="header__login">вход</a>
                    <a href="/registration" className="header__registration">регистрация</a>
                </div>
            </div>
        </header>
    )
}