import React, { Component } from 'react';
import { connect } from 'react-redux'; //1
import { itemsFetchData } from '../redux/actions/items'

class ItemList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         items: [
    //             {
    //                 id: 1,
    //                 label: 'List item 1'
    //             },
    //             {
    //                 id: 2,
    //                 label: 'List item 2'
    //             },
    //             {
    //                 id: 3,
    //                 label: 'List item 3'
    //             },
    //             {
    //                 id: 4,
    //                 label: 'List item 4'
    //             }
    //         ],
    //         hasErrored: false,
    //         isLoading: false
    //     };
    // } // 7

    // fetchData(url) {
    //     this.setState({ isLoading: true });
    //     fetch(url)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw Error(response.statusText);
    //             }
    //             this.setState({ isLoading: false });
    //             return response;
    //         })
    //         .then((response) => response.json())
    //         .then((items) => this.setState({ items }))
    //         .catch(() => this.setState({ hasErrored: true }));
    // } // 8
    componentDidMount() {
        // this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items'); //9
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items') // 10
    }

    render() {
        // if (this.state.hasErrored) {
        //     return <p>Sorry! There was an error loading the items</p>;
        // }
        // if (this.state.isLoading) {
        //     return <p>Loading…</p>;
        // } //11
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        } //12
        return (
            <>
                <h3>Item List</h3>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
}; //3

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
}; //4
// export default ItemList; //5
export default connect(mapStateToProps, mapDispatchToProps)(ItemList); //6