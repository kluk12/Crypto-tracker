import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Api from "./api";
import styled from 'styled-components';
class table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        Api(200).then(response => {
            console.log(response);
            this.setState({isLoaded: true, items: response.data.data});
        }).catch(error => {
            this.setState({isLoaded: null, error: true});
        })

        // axios
        // .get("https://api.coinmarketcap.com/v2/ticker/?limit=100&structure=array")
        // .then(response => {         console.log(response); this.setState({isLoaded:
        // true, items: response.data.data});     }) .catch(error => {
        // this.setState({isLoaded: null, error: true}); })
    }

    Head = () => {
        return <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Prise</th>
            <th scope="col">Volume (24H)</th>
            <th scope="col">Citkulating Supple</th>
            <th scope="col">Change (1H)</th>
            <th scope="col">Change (24H)</th>
            <th scope="col">Change (7D)</th>
        </tr>
    }

    Row = (props) => {
        const geticon = (id) => {
            return `https://s2.coinmarketcap.com/static/img/coins/32x32/${id}.png`
        }
        const formatnumer = (value) => {
            const currencyFormatRegex = /\B(?=(\d{3})+(?!\d))/g;
            const separator = '.';
            const [wholePart,
                decimalPart] = String(value).split(separator);

            const wholePartFormattedAsCurrency = wholePart.replace(currencyFormatRegex, ' ',);
            return wholePartFormattedAsCurrency;
        }
        const formatposition = (value) => {
            if (value > 1) {
                return `${value.toFixed(2)} $`;
            } else {
                return `${value.toFixed(4)} $`;
            }

        }

        const list = props.map((props) => {

            //console.log(props);

            const {name, rank, circulating_supply, id, symbol} = props;
            const {
                price,
                market_cap,
                volume_24h,
                percent_change_1h,
                percent_change_24h,
                percent_change_7d
            } = props.quotes.USD;

            return <tr key={rank}>
                <th scope="row">{rank}</th>
                <td className="text-center">
                    <img alt={name} src={geticon(id)}></img>
                </td>
                <td className="text-center">{name}</td>
                <td className="text-center">{formatnumer(market_cap)}</td>
                <td className="text-center">{formatposition(price)}</td>
                <td className="text-center">{formatnumer(volume_24h)}</td>
                <td className="text-center">{`${formatnumer(circulating_supply)} ${symbol}`}</td>
                <td className="text-center">{`${percent_change_1h} %`}</td>
                <td className="text-center">{`${percent_change_24h} %`}</td>
                <td className="text-center">{`${percent_change_7d} %`}</td>
            </tr>
        });
        return list;
    }
    Tfoot = () => {
        return <div class="btn-toolbar mx-auto align-self-center" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary"><ion-icon name="arrow-dropleft"></ion-icon></button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary">1</button>
          <button type="button" class="btn btn-secondary">2</button>
          <button type="button" class="btn btn-secondary">3</button>
          <button type="button" class="btn btn-secondary">4</button>
        </div>
        <div class="btn-group" role="group" aria-label="Third group">
        <button type="button" className="btn btn-secondary"><ion-icon name="arrow-dropright"></ion-icon></button>
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
            return (
                <div>
                    <div className="table-responsive-sm">
                        <table className="table table-hover">
                            <thead>
                                {this.Head()}
                            </thead>

                            <tbody>
                                {this.Row(items)}
                            </tbody>

                        </table>
                        {this.Tfoot()}
                    </div>
                </div>
            )
        }
    }
}
export default table;