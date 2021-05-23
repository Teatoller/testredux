import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNewUser } from '../redux/actions/userAction'

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            username: this.state.username
        };

        this.props.createNewUser(user);
    }

    render() {
        return (
            <div>
                <h1>Add User</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>name: </label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                    </div>
                    <br />
                    <div>
                        <label>username: </label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.users.user,
    };
};

UserForm.propTypes = {
    createNewUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { createNewUser })(UserForm);