import React from 'react';
import ProductModules from '../ProductModules/ProductModules';
import './ProductCustomizer.css';

export default function ProductCustomizer( props ) {
    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <ProductModules 
                features={ props.features }
                selected={ props.selected }
                updateFeatureSelection={ props.updateFeatureSelection }
                handleFeatureSelectionClass={ props.handleFeatureSelectionClass } />
        </section>
    );
}
