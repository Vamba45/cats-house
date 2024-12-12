import { React, FC } from 'react';
import './search.scss';

export const Search : FC = ({onChange, value}) => {
    return (
        <input type="search" 
                className="search"
                onChange={onChange}
                value={value} />
    )
}