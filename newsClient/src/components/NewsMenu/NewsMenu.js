import React from 'react';
import './NewsMenu.css';
import topStory from './topstories.svg';


class NewsMenu extends React.Component{
    render(){
        return(
            <div className="newsmenu">
                <div className="topStories"><a href="uknews.com"><img src={topStory} width="15px" height="15px"  alt="TopStories" />Top Stories</a></div>
                <div className="world"><a href="uknews.com"><img src="https://img.icons8.com/wired/64/000000/geography.png" width="20px" height="20px"/>World</a></div>
                <div className="entertainment"><a href="uknews.com"><img src="https://img.icons8.com/ios/50/000000/circled-e.png" width="20px" height="20px"/>Entertainment</a></div>
                <div className="business"><a href="uknews.com"><img src="https://img.icons8.com/wired/50/000000/briefcase.png" width="20px" height="20px"/>Business</a></div>
                <div className="technology"><a href="uknews.com"><img src="https://img.icons8.com/wired/64/000000/engineering.png" width="20px" height="20px"/>Technology</a></div>
                <div className="health"><a href="uknews.com"><img src="https://img.icons8.com/wired/64/000000/heart-health.png" width="20px" height="20px"/>Health</a></div>
                <div className="sports"><a href="uknews.com"><img src="https://img.icons8.com/wired/64/000000/trophy.png" width="20px" height="20px" />Sports</a></div>
            </div>
        );
    }
}

export default NewsMenu;