import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots, price } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="font-bold text-center text-2xl text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => {
              setTreatment(appointmentOption);
            }}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Booking modal
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
