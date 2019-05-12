import React from 'react';

export default function FeatureCategory(props) {
    console.log('this name should render ', props.categoryName);
    return (
        <div className="feature" key={props.categoryName}>
              <div className="feature__name">{props.categoryName}</div>
              <ul className="feature__list">
                { props.featureOptions }
              </ul>
        </div>
    );
}
