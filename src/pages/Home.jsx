import React from 'react';
import CampaignGrid from '../components/fundraising/CampaignGrid';

const Home = () => {
  return (
    <div className="w-full bg-white">
      {/* Campaign Grid - Centered with max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Fundraising Now</h2>
          <p className="text-gray-600">Support these active campaigns</p>
        </div>
        <CampaignGrid />
      </div>
    </div>
  );
};

export default Home;