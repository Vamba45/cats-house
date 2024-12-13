import { Card } from '../../components/card/card.tsx';
import { Search } from '../../components/search/search.tsx';
import './main.scss';
import { FC, React, useState, useEffect } from 'react';
import img from '../../assets/logo.png';
import { catAPI } from '../../store/service/catService.ts';


export const Main : FC = () => {

    const [state, setState] = useState("");
    const {data, isLoading} = catAPI.useFetchCatsQuery(``);

    return(
        <div className="mainpage">
           <div className="container">
                <Search value={state} onChange={(e) => { setState(e.target.value); console.log(state) }}/>

                <div className="mainpage__grid">
                    {
                        data && data.map((el) => {
                            if(state != "") {
                                if(el.id.toLowerCase().includes(state.toLowerCase())) {
                                    return <Card img={el.url} text={el.id}/>
                                } else {
                                    return null;
                                }
                            } 

                            return (
                                <Card img={el.url} text={el.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}