import React, { useState } from "react";

function App() {
  // Step 1: State for all inputs
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("Lahore");
  const [vipMeal, setVipMeal] = useState(false);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Daewoo Express Ticket Booking</h2>

      {/* Step 2: Form */}
      <div className="card p-4 mb-4">
        <div className="mb-3">
          <label className="form-label">Passenger Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>     

        <div className="mb-3">
          <label className="form-label">Destination</label>
          <select
            className="form-select"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={vipMeal}
            onChange={(e) => setVipMeal(e.target.checked)}
          />
          <label className="form-check-label">Need VIP Meal?</label>
        </div>

        {/* Step 3: Button disabled if name is empty */}
        <button
          className="btn btn-primary"
          disabled={name.trim() === ""}
        >
          Confirm Booking
        </button>
      </div>

      {/* Step 4: Live Preview Ticket */}
      <div className="card p-4 bg-light border">
        <h5 className="text-center mb-3">🎫 Bus Ticket Preview</h5>

        <p><strong>Name:</strong> {name || "Not Entered"}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>VIP Meal:</strong> {vipMeal ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default App;