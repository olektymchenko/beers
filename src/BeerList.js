import React from 'react';

const BeerList = (props) => {

    let beers = props.beers.map((element, index) => {
        return (<div className="beer" key={index}>
            <div className="idOfBeer">{element.id}</div>
            <div className="img"> <img src={element.image}></img></div>
            <div className="names">{element.name}</div>
        </div>)
    })
    return (
        <div className="BeersBlock">
            {beers}
        </div>
    );
}
export default BeerList;