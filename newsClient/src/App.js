import Header from './components/Header/Header';
import NewsMenu from './components/NewsMenu/NewsMenu';
import ArticleList from './components/ArticleList/ArticleList';
import SearchBar from './components/SearchBar/SearchBar';
import React from 'react';
import NewsOrg from './components/SearchBar/SearchAPI';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {searchedArticles:{}}
  }
  onSearchTermSubmit=(term)=>{
    NewsOrg.post('/search',{
      searchTerm:term
    })
    .then((res)=>this.setState({searchedArticles:res.data.articles}))
    .catch((err)=>console.log(err));
  }
  render(){
    console.log(this.state.searchedArticles);
    const newsLine = this.state.searchedArticles.length?'Search Results':'Headlines';
    return(
      <div className="ui container">
        <Header/>
        <NewsMenu/>
        <ErrorBoundry>
             <SearchBar onFormSubmit={this.onSearchTermSubmit}/>
        </ErrorBoundry>

        <div>{newsLine}</div>
        <ArticleList className="ui relaxed divided list" articles={this.state.searchedArticles}/>
      </div>
    );
    }
}

export default App;
