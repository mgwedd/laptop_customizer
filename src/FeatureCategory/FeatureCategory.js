import React from 'react';
import Feature from '../Feature/Feature'

export default function FeatureCategory(props) {
    const availableFeatures = props.availableFeatures
                        .map((feature, index) => {
                        return <Feature 
                                    key={index}
                                    updateFeatureSelection={props.updateFeatureSelection}
                                    featureObj={feature}
                                    featureClass={ props.handleFeatureSelectionClass ( feature.name, props.selected[props.categoryName].name ) }
                                    featureName={feature.name}
                                    featureCost={feature.cost}
                                    featureCategory={props.categoryName} />
                        });
    return (
        <div className="feature" key={props.categoryName}>
              <div className="feature__name">{props.categoryName}</div>
              <ul className="feature__list">
                { availableFeatures }
              </ul>
        </div>
    );
}
