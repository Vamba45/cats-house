import { Card } from '../../components/card/card.tsx';
import { Search } from '../../components/search/search.tsx';
import './main.scss';
import { FC, React } from 'react';
import img from '../../assets/logo.png';

export const Main : FC = () => {
    return(
        <div className="mainpage">
           <div className="container">
                <Search/>

                <div className="mainpage__grid">
                    <Card text={"Dog"} img={img}/>
                    <Card text={"Cat"}/>
                    <Card text={"Snake"}/>
                    <Card text={"Bird"}/>
                    <Card text={"Pig"}/>
                </div>
            </div>
        </div>

        //https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
    )
}