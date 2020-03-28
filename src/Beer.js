import React, { Component } from 'react';
import BeerList from './BeerList';

class Beer extends Component {
    constructor() {
        super();
        this.state = {
            beersArray: [],
        }
    }


    getBeers(page) {
        let newBeersArray = [];
        fetch('https://api.punkapi.com/v2/beers?page=' + page + '&per_page=10').then(data => data.json()).then(beers => {
            for (let key in beers) {
                let currentBeer = {};
                currentBeer.id = beers[key].id;
                currentBeer.image = beers[key].image_url;
                currentBeer.name = beers[key].name;
                newBeersArray.push(currentBeer);
            }
            this.setState({ beersArray: newBeersArray });
        })

    }


    componentDidMount() {
        this.getBeers(1);
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h3>Id</h3>
                    <h3>Image</h3>
                    <h3>Name</h3>
                </div>
                <BeerList beers={this.state.beersArray} pageNumber={this.changePageNumber} />
                <div class="indexed">
                    <span onClick={() => this.getBeers(1)}>1</span>
                    <span onClick={() => this.getBeers(2)}>2</span>
                    <span onClick={() => this.getBeers(3)}>3</span>
                    <span onClick={() => this.getBeers(4)}>4</span>
                    <span onClick={() => this.getBeers(5)}>5</span>
                </div>
            </div>
        )
    }
}

export default Beer;