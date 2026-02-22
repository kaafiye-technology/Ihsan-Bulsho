import React from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate();
  const progress = (campaign.raised / campaign.goal) * 100;

  const handleClick = () => {
    navigate(`/campaign/${campaign.id}`, { state: { campaign } });
  };

  return (
    <div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      {/* Image Container - Top Half */}
      <div className="relative h-56 w-full">
        <img
          src={`${API_URL}/${campaign.image}`}
          alt={campaign.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container - Bottom Half */}
      <div className="p-5">
        {/* Sponsor Badge - Only show if sponsored */}
        {campaign.sponsored && (
          <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded-full mb-3">
            Sponsored
          </div>
        )}

        {/* Company Logo and Name - Side by Side */}
        <div className="flex items-center gap-2 mb-3">
          {/* Logo Image - using the logo field from data */}
          <img
            src={`${API_URL}/${campaign.image}`}
            alt={campaign.organizer}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />

          {/* Company Name */}
          <span className="text-sm font-semibold text-gray-800">
            {campaign.organizer}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
          {campaign.title}
        </h3>

        {/* Stats Row - Donors & Days Left */}
        <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
          <span className="font-medium">{campaign.donors} donors</span>
          <span className="text-gray-300">•</span>
          <span>{campaign.daysLeft} days left</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
          <div
            className="bg-emerald-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Bottom Section - Two lines for funding + Donate button */}
        <div className="flex items-center justify-between mt-1">
          {/* Left Side - Two-line Funding Info */}
          <div>
            <div className="text-2xl font-bold text-gray-900 leading-tight">
              ${campaign.raised.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              funded of ${campaign.goal.toLocaleString()}
            </div>
          </div>

          {/* Right Side - Larger Donate Button */}
          <button
            className="px-6 py-3 bg-emerald-600 text-white text-base font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm hover:shadow"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click when clicking button
              navigate(`/campaign/${campaign.id}`);
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
