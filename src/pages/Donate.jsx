import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../constants";
import { postApiKey } from "../services/api";
import { TbChevronsDownLeft } from "react-icons/tb";

export default function Donate() {
  const { id } = useParams();
  const location = useLocation();

  const { campaign } = location.state || {}; // get full object

  const [amount, setAmount] = useState(10);

  const [form, setForm] = useState({
    name: "",
    email: "",
    tell: "",
    amount: 10,
    message: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name, ":", e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitDonation = async () => {
    const payload = {
      campaign_id: id,
      donor_name: form.name,
      donor_email: "",
      evc_payment_tell: form.tell,
      evc_amount: amount,
      evc_description: form.message,
    };
    // console.log("payload:", payload);
    try {
      const res = await postApiKey(
        "create-apikey/register-donation_payment",
        payload
      );
      //   console.log("Donation submitted:", res);
      alert(res.message);
    } catch (err) {
      console.error(err);
      alert("Payment failed, try again");
    }
  };

  //   console.log("form:", form);
  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Campaign not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Campaign Details */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={`${API_URL}/${campaign.image}`}
            alt={campaign.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {campaign.title}
            </h2>
            <p className="text-gray-600 mb-4">{campaign.description}</p>

            <div className="text-sm text-gray-500">
              <p>
                <strong>Raised:</strong> ${campaign.raised.toLocaleString()}
              </p>
              <p>
                <strong>Goal:</strong> ${campaign.goal.toLocaleString()}
              </p>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width: `${(campaign.raised / campaign.goal) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Donate to this campaign
          </h3>

          {/* Amount buttons */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[5, 10, 25, 50, 100, 250].map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                type="button"
                className={`py-2 rounded-lg font-semibold border
                  ${
                    amount === value
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                ${value}
              </button>
            ))}
          </div>

          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Custom amount"
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <input
            type="number"
            name="tell"
            placeholder="Payment Tell"
            className="w-full border rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <textarea
            rows="3"
            name="message"
            placeholder="Message (optional)"
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            onClick={submitDonation}
          >
            Donate ${amount}
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Secure donation · Campaign ID: {campaign.id}
          </p>
        </div>
      </div>
    </div>
  );
}
