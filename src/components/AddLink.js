import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostNewFeed($title: String!, $url: String, $website: String, $author: String) {
    postNewFeed(title: $title, url: $url, website: $website, author: $author) {
        title
        url
        website
        author
    }
  }
`

class AddLink extends Component {
        state = {
          description: '',
          url: '',
        }

        constructor(props) {
            super(props)
            this.state = {showForm: false}
          }
        

        render() {
            const { title, url, website, author } = this.state
            return (
                <div className="article-form">
                    <form>
                    <div className="form-group">
                        Title<br/>
                        <input 
                            value={title}
                            onChange={e => this.setState({ title: e.target.value })}>
                        </input>
                    </div>
                    <div className="form-group">
                        URL<br/>
                        <input
                            value={url}
                            onChange={e => this.setState({ url: e.target.value })}>
                        </input>
                    </div>
                    <div className="form-group">
                        Website<br/>
                        <input
                            value={website}
                            onChange={e => this.setState({ website: e.target.value })}>
                        </input>
                    </div>
                    <div className="form-group">
                        Author<br/>
                        <input
                            value={author}
                            onChange={e => this.setState({ author: e.target.value })}>
                        </input>
                    </div>
                    <div className="form-group">
                    <Mutation mutation={POST_MUTATION} variables={{ title, url, website, author }}>
                        {postMutation => <button onClick={postMutation}>Submit</button>}
                    </Mutation>
                    </div>
                    </form>
                </div>
            )
        }
}

export default AddLink;