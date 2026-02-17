import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonationPage = () => {
  const navigate = useNavigate();
  const [customAmount, setCustomAmount] = useState('20.00');
  const [paymentMethod, setPaymentMethod] = useState('googlepay');
  const [donorName, setDonorName] = useState('Anonymous kind soul');
  const [donorLocation, setDonorLocation] = useState('');
  const [comment, setComment] = useState('');
  const [shareEmail, setShareEmail] = useState(false);
  const [signupNewsletter, setSignupNewsletter] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', {
      amount: customAmount,
      paymentMethod,
      donorName,
      donorLocation,
      comment,
      shareEmail,
      signupNewsletter
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Campaign Image */}
        <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden mb-6">
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&auto=format&fit=crop" 
            alt="Campaign"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Campaign Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Stop Gaza's Starvation Now: 1,000 Hot Meals + Water Daily
        </h1>

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image 1: Custom Amount */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Enter a custom amount</h2>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">$</span>
              <input
                type="number"
                step="0.01"
                min="1"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-2xl font-semibold text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="20.00"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Minimum donation: $1.00</p>
          </div>

          {/* Image 2: Payment Method */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment method</h2>
            <div className="space-y-3">
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="googlepay"
                  checked={paymentMethod === 'googlepay'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-3 text-gray-700">Google Pay</span>
              </label>
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-3 text-gray-700">Add a Credit / Debit card</span>
              </label>
            </div>
          </div>

          {/* Image 3: Preferences */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h2>
            
            {/* Donor Display */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Your donation will appear as:</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-medium text-gray-900">{donorName}</p>
                <p className="text-sm text-gray-500">${customAmount} USD, a few moments ago</p>
              </div>
            </div>

            {/* Edit Donor Info */}
            <div className="mb-6">
              {!isEditing ? (
                <button 
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="text-emerald-600 font-medium hover:text-emerald-700 mb-3"
                >
                  Edit
                </button>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Name</label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Location</label>
                    <input
                      type="text"
                      value={donorLocation}
                      onChange={(e) => setDonorLocation(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="City, Country"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button 
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Save
                    </button>
                    <button 
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setDonorName('Anonymous kind soul');
                        setDonorLocation('');
                      }}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Preferences Checkboxes */}
            <div className="space-y-3 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shareEmail}
                  onChange={(e) => setShareEmail(e.target.checked)}
                  className="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                />
                <span className="text-sm text-gray-600">
                  Share your email with the organizers to keep up with their work.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={signupNewsletter}
                  onChange={(e) => setSignupNewsletter(e.target.checked)}
                  className="mt-1 w-4 h-4 text-emerald-600 focus:ring-emerald-500 rounded"
                />
                <span className="text-sm text-gray-600">
                  Sign up to LaunchGood's newsletter and learn about inspiring causes with over 800k people.
                </span>
              </label>
            </div>

            {/* Words of Support */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Words of support</h3>
              <p className="text-sm text-gray-500 mb-2">
                Leave a comment for the organizer. Optional. This message will appear on the fundraising page.
              </p>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Write your message of support..."
              />
            </div>

            {/* Donate Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors mb-3"
            >
              GIVE ${customAmount}
            </button>

            {/* Trust & Safety */}
            <p className="text-xs text-gray-500 text-center">
              Backed by our Trust & Safety guarantee<br />
              By continuing, you agree with LaunchGood's Terms of Use and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;