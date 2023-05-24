import React from "react";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div className="mt-16" style={{ background: `url(${appointment})` }}>
      <div className="text-center py-6 ">
        <h4 className="text-lg text-primary mt-10 font-bold">Contact Us</h4>
        <h1 className=" text-white text-4xl font-bold">
          Stay Connected with us
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <form>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-2"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-2"
          />
          <textarea
            className="textarea textarea-bordered w-full mt-2"
            placeholder="Bio"
          ></textarea>
          <div className="flex flex-col items-center justify-center mt-2 mb-16">
            <button className="btn btn-primary mx-auto content-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
