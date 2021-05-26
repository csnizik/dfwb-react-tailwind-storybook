import React from 'react'
import classNames from 'classnames';

import Logo from "../../../01-atoms/images/Logo";

import './Sidebar.css';

function Sidebar({ sidebarOpen }) {
    return (
        <div className={classNames(`${sidebarOpen ? ['w-11/12 md:w-6/12' ]: 'w-16'}`,'lg:w-64', 'absolute','z-40','left-0','top-0','lg:static','lg:left-auto','lg:top-auto','lg:translate-x-0','transform','h-screen','transition-all','duration-500','bg-navy')}>
            <Logo />
        </div>
    )
}

export default Sidebar;