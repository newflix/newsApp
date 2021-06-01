import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchTerm:''};
    }
    onInputChange = (event)=>{
        this.setState({searchTerm:event.target.value});
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
        if(this.state.searchTerm !== '')
        this.props.onFormSubmit(this.state.searchTerm);
    }

    render(){
        return(<div data-testid="search-1" className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search</label>
                    <input type="text" onChange={this.onInputChange} />
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;