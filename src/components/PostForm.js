import React, { Component } from 'react'
import axios from "axios";

export class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        const headers = {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',
            post, {
            headers: headers
        }
        )
            .then((response) => console.log("...", response.data))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
export default PostForm