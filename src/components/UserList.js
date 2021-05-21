import React, { Component } from "react";
// import { connect } from 'react-redux'; //1
// import { usersFetchData } from '../redux/actions/users'; //2
import axios from "axios";// 9

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: ["yyyy"],
      // users: [
      //   {
      //     userId: 1,
      //     id: 1,
      //     title:
      //       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      //     body:
      //       "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      //   },
      //   {
      //     userId: 1,
      //     id: 2,
      //     title: "qui est esse",
      //     body:
      //       "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      //   },
      //   {
      //     userId: 1,
      //     id: 3,
      //     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      //     body:
      //       "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      //   },
      // ],
      hasErrored: false,
      isLoading: false,
    };
  } //3

  fetchData(url) {
    this.setState({ isLoading: true });

    axios.get(url)
      .then((response) => {
        if (!response) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then((response) => response.data)
      .then((users) => this.setState({ users })) // ES6 property value shorthand for { users: users }
      .catch(() => this.setState({ hasErrored: true }));
  } // 7

  componentDidMount() {
    this.fetchData('https://jsonplaceholder.typicode.com/users');
    // this.props.fetchData('https://jsonplaceholder.typicode.com/users'); //8
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the users</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    const { users } = this.state;
    const userItems = users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))
    return (
      <>
        <h3>UserList List</h3>
        <ul>
          {userItems}
        </ul>
      </>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     users: state.users,
//     hasErrored: state.usersHasErrored,
//     isLoading: state.usersIsLoading
//   };
// }; //4

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchData: (url) => dispatch(usersFetchData(url))
//   };
// }; //5
export default UserList;
// export default connect(mapStateToProps, mapDispatchToProps)(UserList); //6
