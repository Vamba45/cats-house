import {React} from 'react';
import { FC } from "react";
import {Header} from "../header/header.tsx";
import { Outlet } from "react-router";

import './layout.scss';

const Layout: FC = () => {

    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;