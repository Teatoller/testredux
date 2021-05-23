import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bulletpostsFetchData } from "../redux/actions/bulletActions"
import PostForm from './PostForm';

export class Post extends Component {

    componentDidMount() {
        this.props.bulletpostsFetchData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <>
                <PostForm />
                <hr />
                <h1>Posts</h1>
                {postItems}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.bullets.posts,
        newPost: state.bullets.post,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        bulletpostsFetchData: () => dispatch(bulletpostsFetchData())
    };
};
Post.propTypes = {
    bulletpostsFetchData: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
