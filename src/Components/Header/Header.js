import React from 'react';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <header className='mainHeader'>
                <h1>Ты сегодня покормил кота?</h1>
            </header>
        );
    }
}

export default Header;
