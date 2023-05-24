import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="hero mt-32">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-md mr-4 lg:w-2/3 rounded-lg shadow-2xl"
          alt=""
        />
        <div className="lg:w-1/3 lg:ml-12 p-6">
          <h1 className="text-4xl font-bold">
            Exceptional Dental
            <br /> Care,on your Terms
          </h1>
          <p className="py-6 text-justify">
            It is a long established fact that a reader will be distructed by
            the readable content of a page when looking at its layout. Provident
            cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id
            nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
