import React from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import PlanetDetails from '../planet-details'
import StarshipDetails from '../starship-details'
 //import App from './index.js'

import '.app.css'

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row m2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;