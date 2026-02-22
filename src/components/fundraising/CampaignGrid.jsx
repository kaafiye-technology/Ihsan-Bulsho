import React, { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import { getApiKey } from "../../services/api"; // your external function

const CampaignGrid = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        setLoading(true);
        const data = await getApiKey(
          "getlink-apikey/donation_campaigns-report"
        ); // pass 'campaigns' as route
        console.log("Fetched campaigns:", data);
        // Map API response keys to your CampaignCard props
        const mapped = data.report.map((c) => ({
          id: c.ID,
          sponsored: c.Sponsored === 1,
          organizer: c.Organizer,
          title: c.Title,
          description: c.Description,
          longDescription: c.Longdescription,
          image: c.Image,
          logo: c.Logo,
          raised: parseFloat(c.Raised),
          goal: parseFloat(c.Goal),
          donors: c.Donors,
          daysLeft: c.Daysleft,
          createdAt: c.Createdat,
          modifiedAt: c.Modifiedat,
        }));

        setCampaigns(mapped);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCampaigns();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">Loading campaigns...</p>
      </div>
    );
  }

  if (!campaigns.length) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">No campaigns found.</p>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Fundraising Now</h2>
        <p className="text-gray-600 mb-8">Support these active campaigns</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignGrid;
