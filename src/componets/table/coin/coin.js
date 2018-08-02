import React from 'react';
import PropTypes from 'prop-types';

Coin = (props) => {
    const list = props.map((props) => {

        console.log(props);

        const {name, rank, circulating_supply, total_supply} = props;
        const {
            price,
            market_cap,
            volume_24h,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d
        } = props.quotes.USD;
        return <tr>
            <th scope="row">{rank}</th>
            <td>{name}</td>
            <td>{market_cap}</td>
            <td>{price}</td>
            <td>{volume_24h}</td>
            <td>{circulating_supply}</td>
            <td>{percent_change_1h}</td>
            <td>{percent_change_24h}</td>
            <td>{percent_change_7d}</td>
        </tr>
    });
    return list;
}
Coin.PropTypes = {
    row: PropTypes.object,
//     // acronym: PropTypes.string,
//     // value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//     // cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Coin.defaultProps = {
    rank: "0",
    name: "",
    market_cap: "0",
    price: "0",
    volume_24h: "0",
    circulating_supply: "0",
    percent_change_1h: "0",
    percent_change_24h: "0",
    percent_change_7d: "0"
}

export default Coin;