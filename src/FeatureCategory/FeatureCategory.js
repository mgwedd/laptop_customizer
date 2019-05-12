import React from 'react';
import Feature from '../Feature/Feature'
import './FeatureCategory.css'

export default function FeatureCategory(props) {
  const { availableFeatures, updateFeatureSelection, selected, handleFeatureSelectionClass, categoryName } = props;
    const featuresForCategory = availableFeatures
                                .map((feature, index) => {
                                  return <Feature 
                                    key={index}
                                    updateFeatureSelection={updateFeatureSelection}
                                    featureObj={feature}
                                    featureClass={ handleFeatureSelectionClass( feature.name, selected[ categoryName ].name ) }
                                    featureName={feature.name}
                                    featureCost={feature.cost}
                                    featureCategory={categoryName} />
                                });
    return (
        <div className="feature" key={ categoryName }>
              <div className="feature__name">{ categoryName }</div>
              <ul className="feature__list">
                { featuresForCategory }
              </ul>
        </div>
    );
}
