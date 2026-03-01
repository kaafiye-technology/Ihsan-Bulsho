// src/pages/MapDetail.js
import React from "react";

const MapDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Ihsaan Bulsho Distribution - KM4 Mogadishu
      </h1>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column - Google Map */}
        <div className="h-96 w-full rounded-lg shadow overflow-hidden">
          <iframe
            title="Mogadishu KM4 Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.0000000000005!2d45.370000000000005!3d2.0500000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKM4%20Mogadishu!5e0!3m2!1sen!2s!4v1670000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right column - Details */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Location Details</h2>
            <p className="mb-2">
              <strong>Name:</strong> Ihsaan Bulsho Distribution Center
            </p>
            <p className="mb-2">
              <strong>Address:</strong> KM4, Mogadishu, Somalia
            </p>
            <p className="mb-2">
              <strong>Contact:</strong> +252 61 760 3882
            </p>
            <p className="mb-2">
              <strong>Description:</strong> Main distribution center for
              Ramadaan food and water support to vulnerable families in
              Mogadishu.
            </p>
          </div>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapDetail;
