var React = require('react');
var ReactDOM = require('react-dom');

var SearchBar = React.createClass({
    doSearch:function(event){
        var query=event.target.value;
        this.props.doSearch(query);
    },
  render: function() {
    return (
        <div className="ms-SearchBox center ms-Grid-col ms-u-sm12">
            <div class="searchbar">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input className="ms-SearchBox-field" ref="searchInput" value={this.props.query} onChange={this.doSearch} type="text" placeholder="Search..." />
            </div>
        </div>
    );
  }
});

module.exports = SearchBar;