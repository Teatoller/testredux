import React, { Component } from 'react'
// import axios from "axios";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from "../redux/actions/bulletActions"

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

        // Call action here
        this.props.createPost(post);

        // const headers = {
        //     'Content-Type': 'application/json',
        //     "Access-Control-Allow-Origin": "*",
        // }
        // axios.post('https://jsonplaceholder.typicode.com/posts',
        //     post, {
        //     headers: headers
        // }
        // )
        //     .then((response) => console.log("...", response.data))
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
// export default PostForm
const mapStateToProps = (state) => {
    return {
        post: state.bullets.post,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createPost: () => dispatch(createPost())
//     };
// };
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    // posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps, {createPost})(PostForm);