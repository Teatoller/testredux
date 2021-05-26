import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; //1
import { increment, decrement, reset } from '../redux/actions/counterActions' //2

class Counter extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         counter: 0,
    //     }
    // }

    render() {
        // const increment = () => {
        //     this.setState((state) => ({
        //         counter: state.counter + 1
        //     }));
        // }
        // const decrement = () => {
        //     this.setState((state) => ({
        //         counter: state.counter - 1
        //     }));
        // }
        // const reset = () => {
        //     this.setState((state) => ({
        //         counter: state.counter =0
        //     }));
        // }
        // const { counter } = this.state;
        return (
            <>
                <div>Counter Value: {this.props.counter}</div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
                <button onClick={this.props.reset}>Reset</button>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps >>>", state);
    return {
        counter: state.counter.count
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
    };
};
Counter.propTypes = {
    counter: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter)