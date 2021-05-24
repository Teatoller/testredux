import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsersData } from "../redux/actions/userAction"
import UserForm from "./UserForm";

class User extends Component {

  componentDidMount() {
    this.props.fetchUsersData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newUser) {
      this.props.users.unshift(nextProps.newUser);
    }
  }

  render() {

    const userItems = this.props.users.map((user) => (
      <ul key={user.id}>
        <li key={user.id}>name: {user.name}</li>
        <li key={user.id}>username: {user.username}</li>
        <hr />
      </ul>
    ))
    return (
      <>
        <UserForm />
        <hr />
        <h3>User List</h3>
        { userItems}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    newUser: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersData: () => dispatch(fetchUsersData())
  };
};
User.propTypes = {
  fetchUsersData: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  newUser: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
