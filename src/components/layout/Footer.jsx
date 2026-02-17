import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Ways to Give */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Ways to give</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-600">Ramadan Challenge</a></li>
              <li><a href="#" className="hover:text-emerald-600">Daily Givers</a></li>
              <li><a href="#" className="hover:text-emerald-600">Friday Givers</a></li>
              <li><a href="#" className="hover:text-emerald-600">Give your Zakat</a></li>
              <li><a href="#" className="hover:text-emerald-600">Discover fundraisers</a></li>
            </ul>
          </div>

          {/* Column 2: Fundraise */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Fundraise</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-600">Fundraise in Ramadan</a></li>
              <li><a href="#" className="hover:text-emerald-600">Start a fundraiser</a></li>
              <li><a href="#" className="hover:text-emerald-600">Event Mode</a></li>
              <li><a href="#" className="hover:text-emerald-600">Legacy & Memorial</a></li>
              <li><a href="#" className="hover:text-emerald-600">Resources</a></li>
            </ul>
          </div>

          {/* Column 3: About Ihsan Bulsho */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About Ihsan Bulsho</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-emerald-600">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-600">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-600">Careers <span className="text-emerald-600">(We're hiring!)</span></a></li>
              <li><a href="#" className="hover:text-emerald-600">Support Center</a></li>
              <li><a href="#" className="hover:text-emerald-600">Safety & Compliance</a></li>
              <li><a href="#" className="hover:text-emerald-600">Contact us</a></li>
              <li><a href="#" className="hover:text-emerald-600">Request a feature</a></li>
              <li><a href="#" className="hover:text-emerald-600">Service Status</a></li>
            </ul>
          </div>

          {/* Column 4: Stats */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-gray-900">2.7M</div>
                <div className="text-sm text-gray-600">Donors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">200K</div>
                <div className="text-sm text-gray-600">Campaigns</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$753M</div>
                <div className="text-sm text-gray-600">Funded</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">164</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                Discover
              </button>
              <button className="w-full px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50">
                Fundraise
              </button>
              <p className="text-xs text-emerald-600 text-center">0% platform fee!</p>
            </div>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;