import React from 'react';
import './ArticleItem.css';

class ArticleItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const{url,title,urlToImage,description} = this.props.news;
        return(
            <div className="item">
                <img className="ui image" src={urlToImage} width="70px" height="70px"></img>
                <div className="content">
                    <a href={url} className="header">{title}</a>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleItem;