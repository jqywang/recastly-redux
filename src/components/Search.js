import React from 'react';
 
class Search extends React.Component {


  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    // this.setState({
    //   value: e.target.value
    // });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}
// dont need state in here for some reason?
export default Search;
