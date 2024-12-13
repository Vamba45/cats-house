import { React, FC } from 'react';
import './card.scss';

export const Card : FC = ({img, text}) => {
    return (
        <div className="card">
            <div className="card__row">
                <div className="card__column">
                    <img src={img} alt="card-image" className="card__image" />
                </div>
                <div className="card__column">
                    <p className="card__text">{text}</p>
                    <a href="" className="card__btn">Подробнее</a>
                </div>
            </div>
        </div>
    )
}