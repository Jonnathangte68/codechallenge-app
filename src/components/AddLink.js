import React from 'react';

function AddLink(props) {

    return props.showForm ? (
        <div className="article-form">
            <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                Title<br/>
                <input name="title"></input>
            </div>
            <div className="form-group">
                URL<br/>
                <input name="url"></input>
            </div>
            <div className="form-group">
                Website<br/>
                <input name="website"></input>
            </div>
            <div className="form-group">
                Author<br/>
                <input name="author"></input>
            </div>
            <div className="form-group">
                <button type="submit">Add Article</button>
            </div>
            </form>
        </div>
    ) : null;
}

export default AddLink;