import React from 'react';
import FeatureCategory from '../FeatureCategory/FeatureCategory';

export default function ProductModules(props) {
    // EACH option is a particular feature item (clickable item)
    // it needs to be fed a type — Processor, Display, etc., to jump into that array.

    // destructure the data and then operate on each type (proc, display, etc
    // {Display, OperatingSystem, Processor, VideoCard} = {...this.props.features} 

    // function takeACategory(allcategories) {
    //     // returns one category out of all categoryies. (HIGHEST LEVEL COMPONENT)
    // }

    //  function getItsFeatures(category) {
    //     // returns all features for a given category (MID LEVEL)
    // }

    // function getAFeature(category) {
    //     // returns a single feature (LOW LEVEL) (this is <FEATURE>)
    // }
    // { features } = props.features;
    return (
        Object.keys(props.features)
        .map((featureCategory, index) => {
            return <FeatureCategory
                        key={ index }
                        categoryName={ featureCategory }
                        availableFeatures={ props.features[featureCategory] }
                        selected={ props.selected }
                        updateFeatureSelection={ props.updateFeatureSelection } 
                        handleFeatureSelectionClass={ props.handleFeatureSelectionClass }/>          
        })
    );
}

