import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LogoSvg.css';

import { ReactComponent as LogoSeaFoam } from './DestinFWB_Logo__sea foam teal.svg'

const LogoSvg = () => {
    return (
        <div className="myClass">
            <LogoSeaFoam />
        </div>
    )
}

LogoSvg.propTypes = {
    color: PropTypes.string
}


export default LogoSvg;