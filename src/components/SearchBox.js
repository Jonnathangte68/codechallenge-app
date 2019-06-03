import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <input
                onInput={this.props.handleInput}
                name="searchArticle"
                id="searchArticle"
                placeholder="search"
            />
        );
    }
}

export default SearchBox;