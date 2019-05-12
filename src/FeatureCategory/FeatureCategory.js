import React from 'react';
import Feature from '../Feature/Feature'

export default function FeatureCategory(props) {
    return (
        <div className="feature" key={props.categoryName}>
              <div className="feature__name">{props.categoryName}</div>
              <ul className="feature__list">
                { props.availableFeatures
                        .map((feature, index) => {
                        return <Feature 
                                    key={index}
                                    updateFeatureSelection={props.updateFeatureSelection}
                                    featureObj={feature}
                                    featureClass={ props.handleFeatureSelectionClass ( feature.name, props.selected[props.categoryName].name ) }
                                    featureName={feature.name}
                                    featureCost={feature.cost}
                                    featureCategory={props.categoryName} />
                        }) }
              </ul>
        </div>
    );
}

// featureOptions={ options }

// const options = props.features[featureCategory]
// .map((item, index) => {
// const selectedClass = item.name === props.selected[featureCategory].name ? 'feature__selected' : '';
// const featureClass = 'feature__option ' + selectedClass;
// return <Feature 
//             key={index}
//             updateFeature={props.updateFeature}
//             featureObj={item}
//             featureClass={featureClass}
//             featureName={item.name}
//             featureCost={item.cost}
//             featureCategory={featureCategory} />
// });



//   this works with the last commit.
// export default function FeatureCategory(props) {
//     return (
//         <div className="feature" key={props.categoryName}>
//               <div className="feature__name">{props.categoryName}</div>
//               <ul className="feature__list">
//                 { props.featureOptions }
//               </ul>
//         </div>
//     );
// }