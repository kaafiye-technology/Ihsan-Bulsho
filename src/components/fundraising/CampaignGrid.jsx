import React from 'react';
import CampaignCard from './CampaignCard';
import { campaignsData } from './campaignsData';

const CampaignGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Fundraising Now</h2>
        <p className="text-gray-600 mb-8">Support these active campaigns</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignsData.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignGrid;