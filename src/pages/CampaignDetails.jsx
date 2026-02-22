import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { API_URL } from "../constants";

const CampaignDetails = () => {
  const location = useLocation();
  const { campaign } = location.state || {}; // get full object
  console.log("campaign:", campaign);
  if (!campaign) {
    return <p className="p-4 text-gray-500">Campaign data not available.</p>;
  }
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Campaign not found
      </div>
    );
  }

  // Calculate progress percentage
  const progress = (campaign.raised / campaign.goal) * 100;

  // Sample donors data with profiles
  const recentDonors = [
    {
      amount: "£4",
      currency: "GBP",
      time: "4 days ago",
      name: "maanka",
      profile: {
        type: "user",
        avatar:
          "https://ui-avatars.com/api/?name=maanka&background=10B981&color=fff&size=40",
        initials: "M",
      },
    },
    {
      amount: "$4",
      currency: "USD",
      time: "4 days ago",
      name: "An Anonymous kind soul",
      profile: {
        type: "anonymous",
        avatar: null,
        initials: "AK",
      },
    },
    {
      amount: "$26",
      currency: "CAD",
      time: "a month ago",
      name: "An Anonymous kind soul",
      profile: {
        type: "anonymous",
        avatar: null,
        initials: "AK",
      },
    },
    {
      amount: "$50",
      currency: "USD",
      time: "a month ago",
      name: "An Anonymous kind soul",
      profile: {
        type: "anonymous",
        avatar: null,
        initials: "AK",
      },
    },
    {
      amount: "$50",
      currency: "USD",
      time: "a month ago",
      name: "An Anonymous kind soul",
      profile: {
        type: "anonymous",
        avatar: null,
        initials: "AK",
      },
    },
    {
      amount: "$4",
      currency: "SGD",
      time: "a month ago",
      name: "An Anonymous kind soul",
      profile: {
        type: "anonymous",
        avatar: null,
        initials: "AK",
      },
    },
    {
      amount: "$10",
      currency: "USD",
      time: "2 months ago",
      name: "Anonymous",
      profile: {
        type: "anonymous",
        avatar: null,
        initials: "A",
      },
    },
    {
      amount: "$20",
      currency: "USD",
      time: "2 months ago",
      name: "Anonymous",
      profile: {
        type: "anonymous",
        avatar: null,
        initials: "A",
      },
    },
    {
      amount: "$14",
      currency: "CAD",
      time: "2 months ago",
      name: "Tija Av",
      profile: {
        type: "user",
        avatar:
          "https://ui-avatars.com/api/?name=Tija+Av&background=6366F1&color=fff&size=40",
        initials: "TA",
      },
    },
  ];

  // Copy to clipboard function without closing modal
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://www.launchgood.com/v4/campaign/${campaign.id}`
    );
    setCopySuccess("Link copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  const LongDescription = ({ htmlContent }) => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ width: "100%" }}
      />
    );
  };
  // Share modal component
  const ShareModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={() => setShowShareModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Invite to good
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          Giving is better together! Your share could raise over{" "}
          <span className="font-semibold text-emerald-600">$77</span>.
        </p>

        {/* Campaign Link with Copy Icon */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2 mb-4 border border-gray-200">
          <div className="flex-1 font-mono text-sm text-gray-700 truncate">
            https://www.launchgood.com/v4/campaign/{campaign.id}
          </div>
          <div className="relative">
            <button
              onClick={copyToClipboard}
              className="p-2 text-gray-500 hover:text-emerald-600 transition-colors"
              title="Copy link"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </button>
            {copySuccess && (
              <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                {copySuccess}
              </span>
            )}
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="space-y-3 mb-4">
          <p className="text-sm font-medium text-gray-700">Share via:</p>
          <div className="flex gap-3">
            {/* WhatsApp Button */}
            <button
              onClick={() => {
                window.open(
                  `https://wa.me/?text=${encodeURIComponent(
                    `Support this campaign: https://www.launchgood.com/v4/campaign/${campaign.id}`
                  )}`,
                  "_blank"
                );
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.91 2.76 15.79 3.92 17.33L2.09 21.91L6.79 20.13C8.32 21.17 10.14 21.74 12.05 21.74C17.5 21.74 21.96 17.29 21.96 11.83C21.95 6.38 17.49 2 12.04 2M12.05 19.89C10.37 19.89 8.77 19.36 7.44 18.41L7.12 18.2L4.5 19.1L5.42 16.58L5.19 16.25C4.16 14.84 3.57 13.16 3.57 11.4C3.57 6.73 7.36 2.94 12.04 2.94C16.71 2.94 20.5 6.73 20.5 11.4C20.5 16.07 16.72 19.89 12.05 19.89M16.56 13.8C16.34 13.69 15.33 13.2 15.13 13.13C14.93 13.05 14.78 13.01 14.63 13.23C14.48 13.45 14.07 13.9 13.94 14.05C13.81 14.2 13.68 14.22 13.46 14.11C12.5 13.68 11.86 13.34 11.21 12.56C10.96 12.26 10.63 11.79 10.76 11.58C10.89 11.37 11.04 11.35 11.21 11.18C11.35 11.04 11.5 10.83 11.56 10.68C11.62 10.53 11.59 10.4 11.54 10.29C11.5 10.18 11.09 9.16 10.92 8.74C10.76 8.33 10.6 8.37 10.48 8.37C10.36 8.37 10.22 8.37 10.08 8.37C9.94 8.37 9.7 8.42 9.5 8.63C9.3 8.84 8.78 9.34 8.78 10.35C8.78 11.36 9.5 12.34 9.6 12.48C9.7 12.62 11.07 14.9 13.23 15.86C13.79 16.11 14.23 16.26 14.57 16.37C15.14 16.55 15.65 16.53 16.05 16.46C16.5 16.38 17.42 15.95 17.6 15.48C17.78 15.01 17.78 14.61 17.72 14.52C17.66 14.43 17.5 14.38 17.28 14.27C17.06 14.16 16.56 13.8 16.56 13.8Z" />
              </svg>
              WhatsApp
            </button>

            {/* Facebook Button */}
            <button
              onClick={() => {
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=https://www.launchgood.com/v4/campaign/${campaign.id}`,
                  "_blank"
                );
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-emerald-50 rounded-lg p-4">
          <p className="text-sm text-gray-700 italic mb-2">
            "Whoever guides someone to goodness will have a reward like the one
            who did it."
          </p>
          <p className="text-xs text-gray-500">— Prophet Muhammad</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Share Modal */}
      {showShareModal && <ShareModal />}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Row 1: Campaign Title - Resized smaller */}
        <h1 className="flex items-center justify-center text-2xl md:text-3xl lg:text-2xl font-bold text-gray-900 mb-6 leading-tight ">
          {campaign.title}
        </h1>

        {/* Row 2: Logo and Company Name - Centered */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src={`${API_URL}/${campaign.image}`}
            alt={campaign.organizer}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <span className="text-sm text-gray-500">Organized by</span>
            <p className="font-semibold text-gray-900">{campaign.organizer}</p>
          </div>
        </div>

        {/* Row 3: Image and Donation Info Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Left Side - Image - Will match height of donation card */}
          <div className="lg:w-2/3">
            <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden">
              <img
                src={`${API_URL}/${campaign.image}`}
                alt={campaign.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Donation Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-100 rounded-xl p-6 h-full">
              {/* LaunchGood */}
              <div className="mb-4">
                <span className="text-lg font-semibold text-gray-800">
                  Ihsan Bulsho
                </span>
              </div>

              {/* Amount Raised */}
              <div className="mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${campaign.raised.toLocaleString()}
                </span>
              </div>

              {/* Goal */}
              <div className="mb-4">
                <span className="text-gray-600">
                  raised of ${campaign.goal.toLocaleString()} USD goal
                </span>
              </div>

              {/* Progress Bar - Added here above supporters */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-emerald-600">
                    {progress.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-emerald-600 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Supporters */}
              <div className="mb-6">
                <span className="text-gray-700">
                  {campaign.donors} supporters, {campaign.daysLeft} days left
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <button
                  onClick={() => setShowShareModal(true)}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Share
                </button>
                <button
                  onClick={() => navigate(`/donate/${campaign.id}`)}
                  className="w-full px-4 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors text-center"
                >
                  Donate
                </button>
              </div>

              {/* Zakat Verified */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full">
                  Zakat-verified
                </span>
              </div>

              {/* Impact Info - Moved inside donation card */}
              <div className="space-y-1 pt-2 border-t border-gray-200">
                <div>
                  <span className="text-gray-600">Impact: </span>
                  <span className="text-gray-900 font-medium">
                    Palestinian Territories
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">UK Gift Aid</span>
                </div>
                <div>
                  <span className="text-gray-600">
                    Verified for authenticity.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Two Column Layout - Description and Donors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
          {/* Left Side - Description (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="text-sm text-gray-600 leading-relaxed space-y-4">
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: campaign.longDescription }}
              />
            </div>
          </div>

          {/* Right Side - Donors Section (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6">
              {/* Donors Header with Background Image - Simple version */}
              <div
                className="rounded-t-xl -mt-6 -mx-6 mb-4 p-6 pt-8"
                style={{
                  backgroundImage: "url('/images/donors.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="text-2xl font-bold text-black mb-2">Donors</h2>
                <p className="text-black mb-4">
                  Your share could raise over{" "}
                  <span className="font-semibold">$77</span>
                </p>
              </div>

              {/* Recent Supporters Title */}
              <h3 className="font-semibold text-gray-900 mb-3">
                Recent supporters
              </h3>

              {/* Donors List - Scrollable with max height and profiles */}
              <div className="max-h-80 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {recentDonors.map((donor, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm border-b border-gray-100 pb-3 last:border-0"
                  >
                    {/* Profile Avatar based on donor profile data */}
                    <div className="flex-shrink-0">
                      {donor.profile.type === "user" && donor.profile.avatar ? (
                        <img
                          src={donor.profile.avatar}
                          alt={donor.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : donor.profile.type === "anonymous" &&
                        donor.name === "Anonymous" ? (
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <span className="text-xs font-bold text-emerald-700">
                            {donor.profile.initials}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Donor Info */}
                    <div className="flex-1">
                      <p className="text-gray-600 font-medium">{donor.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-semibold text-gray-900">
                          {donor.amount} {donor.currency}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 text-xs">
                          {donor.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
