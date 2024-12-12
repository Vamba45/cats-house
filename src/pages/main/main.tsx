import { Search } from '../../components/search/search.tsx';
import './main.scss';
import { FC, React } from 'react';

export const Main : FC = () => {
    return(
        <div className="mainpage">
           <div className="container">
                <Search/>
            </div>
        </div>
    )
}