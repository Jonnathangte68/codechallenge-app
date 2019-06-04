import React from 'react';

function SearchBox(props) {
    return (
        <input
            onInput={props.handleInput}
            name="searchArticle"
            id="searchArticle"
            placeholder="search"
        />
    );
}

export default SearchBox;