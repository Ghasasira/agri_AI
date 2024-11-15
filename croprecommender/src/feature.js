import "./feature.css";
// import React from 'react';
import FeatureCard from './featurecard'; 

function Feature() {
  return (
    <>
      <div className="">
        <div className="flex flex-wrap mx-4">
          <FeatureCard 
            title="Crop Recommendation Model" imageSrc="imageSrc" description="description" linkText="#croprecommender"
          />
          <FeatureCard 
            title="Fertilizer Recommender" imageSrc="imageSrc" description="description" linkText="#fertilizer"
          />
          <FeatureCard 
            title="Plant Disease Detection" imageSrc="imageSrc" description="description" linkText="#plantdisease"
          />
        </div>
      </div>
    </>
  );
}

export default Feature;
