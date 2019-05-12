// import React from 'react';
// import Feature from '../Feature/Feature';
// import FeatureCategory from '../FeatureCategory/FeatureCategory';

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

    const features = Object.keys(props.features)
          .map(featureCategory => {
            const options = props.features[featureCategory]
                .map((item, index) => {
                const selectedClass = item.name === props.selected[featureCategory].name ? 'feature__selected' : '';
                const featureClass = 'feature__option ' + selectedClass;
                return <Feature 
                            key={index}
                            updateFeature={props.updateFeature}
                            featureObj={item}
                            featureClass={featureClass}
                            featureName={item.name}
                            featureCost={item.cost}
                            featureCategory={featureCategory} />
                });

            return <FeatureCategory
                        categoryName={ featureCategory }
                        featureOptions={ options } />
            
            
          });  

          return features 

}