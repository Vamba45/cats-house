import  { React, FC } from 'react';
import './header.scss';
import logo from  '../../assets/logo.png';

export const Header : FC = () => {
    return (
        <header className="header">
            <div className="header__row">
                <div className="header__column header__logo">
                    <a href="/">logo</a>
                </div>
                <div className="header__column">

                </div>
                <div className="header__column"></div>
            </div>
        </header>
    )
}