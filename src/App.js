import React, {Component} from 'react';
import axios from 'axios';
import Table from './componets/table/table';

import Header from './componets/Head/head';
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            coin: [],
            header: []
        }

    }

    componentDidMount() {

        // axios .get(" https://api.coinmarketcap.com/v2/global/") .then(response => {
        // console.log(response);     this.setState({isLoadedg: true, header:
        // response}); }) .catch(error => {     this.setState({isLoadedg: null, errorg:
        // true}); })
    }
    render() {
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>

                    <Header />
                    {/* <Table/> */}
                </div>
            );
        }
    }
}
export default App;
