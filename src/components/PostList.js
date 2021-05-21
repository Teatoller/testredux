import React, { Component } from "react";
import { connect } from 'react-redux'; //1
import { postsFetchData } from '../redux/actions/posts'; //2
// import axios from "axios";// 9

class PostList extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       posts: [
  //         {
  //           userId: 1,
  //           id: 1,
  //           title:
  //             "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //           body:
  //             "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //         },
  //         {
  //           userId: 1,
  //           id: 2,
  //           title: "qui est esse",
  //           body:
  //             "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //         },
  //         {
  //           userId: 1,
  //           id: 3,
  //           title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //           body:
  //             "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  //         },
  //       ],
  //       hasErrored: false,
  //       isLoading: false,
  //     };
  //   } //3

  //   fetchData(url) {
  //     this.setState({ isLoading: true });

  //     axios.get(url)
  //       .then((response) => {
  //         if (!response) {
  //           throw Error(response.statusText);
  //         }
  //         this.setState({ isLoading: false });
  //         return response;
  //       })
  //       .then((response) => response.data)
  //       .then((posts) => this.setState({ posts })) // ES6 property value shorthand for { posts: posts }
  //       .catch(() => this.setState({ hasErrored: true }));
  //   } // 7

  componentDidMount() {
    // this.fetchData('https://jsonplaceholder.typicode.com/posts');
    this.props.fetchData('https://jsonplaceholder.typicode.com/posts'); //8
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the posts</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <>
        <h3>Post List</h3>
        <ul>
          {this.props.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  };
}; //4

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(postsFetchData(url))
  };
}; //5
// export default PostList;
export default connect(mapStateToProps, mapDispatchToProps)(PostList); //6
