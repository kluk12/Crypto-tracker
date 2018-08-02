import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from "./api";
import logo from "./coinscreen.png"
 const formatAsCurrency=(value)=> {
    const currencyFormatRegex = /\B(?=(\d{3})+(?!\d))/g;
    const separator = '.';
    const [wholePart,
        decimalPart] = String(value).split(separator);

    const wholePartFormattedAsCurrency = wholePart.replace(currencyFormatRegex, ' ',);
    return wholePartFormattedAsCurrency;
}
const Wrapper = `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        Api().then(response => {
            console.log(response);
            this.setState({isLoaded: true, items: response.data.data});
        }).catch(error => {
            this.setState({isLoaded: null, error: true});
        })
    }
    viewapi = (props) => {
        console.log(props);
        const {total_market_cap, total_volume_24h} = props.quotes.USD;
        const {bitcoin_percentage_of_market_cap} = props;
        return <div className="container">
            <div className="row">
                <div className="col-md text-center my-4">
                    <p>Market Cap : {formatAsCurrency(total_market_cap)} $</p>
                </div>
                <div className="col-md text-center my-4">
                    <p>Dominacja BTC : {bitcoin_percentage_of_market_cap}
                        %</p>
                </div>
                <div className="col-md text-center my-4">
                    <p>Volumen (24h) : {formatAsCurrency(total_volume_24h) } $</p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-md navbar-brand my-2">


                    <img src={logo} className="img-fluid img-thumbnail" alt="coinscreem"></img>

                </div>
            </div>
        </div>

    }
    render() {
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <div >{this.viewapi(items)}</div>;
        }
    }
}
export default Header;