import React, { Component } from 'react';
import Header from './Header/Header'
import ProductCustomizer from './ProductCustomizer/ProductCustomizer';
import ShoppingCart from './ShoppingCart/ShoppingCart'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeatureSelection = ( feature, newValue ) => {
    const selected = Object.assign({}, this.state.selected);
    selected[ feature ] = newValue;
    this.setState({
      selected
    });
  }
  
  handleFeatureSelectionClass = ( featureName, featureSelected ) => {
    const featureClass = 'featureClass';
    if ( featureName === featureSelected ) {
        return featureClass + ' feature__selected';
    } else {
        return featureClass;
    }
  }

  render() {
    const { features } = this.props;
    const { selected } = this.state;
    return (
      <div className="App">
        <Header />      
        <main>
          <ProductCustomizer 
            features={ features } 
            selected={ selected }
            handleFeatureSelectionClass={ this.handleFeatureSelectionClass }
            updateFeatureSelection={ this.updateFeatureSelection } />
          <ShoppingCart 
            selectedFeatures={ selected } />
        </main>
      </div>
    );
  }
}