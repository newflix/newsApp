import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div data-testid="header-1" className="channelTitle">
                <div className="uk"><b>UK</b></div>
                <div className="news"><b>News</b></div>
            </div>
        );
    }
}

export default Header;