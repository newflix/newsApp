import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

class ArticleList extends React.Component{
    constructor(props){
        super(props);
        this.state={newsApiRes:{}}
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.articles.length && nextProps.articles !== prevState.newsApiRes){
            return{
                newsApiRes:nextProps.articles
            }
        }
        return prevState;
}

    getUkTopHeadLines(){
        fetch('http://localhost:5000/')
        .then((res)=>res.text())
        .then(res=>{
            this.setState({newsApiRes:JSON.parse(res)});
        })
        .catch((err)=>console.log('getting top headlines failed..'))
    }

    render(){
        if(this.state.newsApiRes.length){
            const articleItems =
                this.state.newsApiRes.map((news)=>{
                    return(
                        <ArticleItem key={news.title} news={news}/>
                    )
                })

                return(
                    <div className="ui relaxed divided list">{articleItems}</div>
                )
        }

        return(<div></div>);
    }

    componentDidMount(){
        this.getUkTopHeadLines();
    }
}

export default ArticleList;