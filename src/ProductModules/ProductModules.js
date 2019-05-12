import React from 'react';
import FeatureCategory from '../FeatureCategory/FeatureCategory';

export default function ProductModules(props) {
    const { features, handleFeatureSelectionClass, selected } = props;
    console.log(Object.keys( features ))
    return (        
        Object.keys( features )
        .map((featureCategory, index) => {
            console.log(featureCategory)
            return <FeatureCategory
                        key={ index }
                        categoryName={ featureCategory }
                        availableFeatures={ features[featureCategory] }
                        selected={ selected }
                        updateFeatureSelection={ props.updateFeatureSelection } 
                        handleFeatureSelectionClass={ handleFeatureSelectionClass }/>          
        })
    );
}
