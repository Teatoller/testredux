import React, { Component } from 'react'
import { connect } from 'react-redux'
import makeApiCall from '../services/services' //component to make api call


class Listing extends Component {
    render() {
        return (
            <>

            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        isLoading: state.isLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(makeApiCall())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Listing);
