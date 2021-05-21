import React, { Component } from 'react'

export class Post extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }
    render() {
        return (
            <>
                <h1>Posts</h1>
            </>
        )
    }
}
export default Post