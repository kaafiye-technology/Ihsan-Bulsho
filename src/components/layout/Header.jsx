import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if current path is login, signup, or donation page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isCampaignPage = location.pathname.includes('/campaign/');
  const isDonationPage = location.pathname.includes('/donate/');

  return (
    <>
      {/* Simple Header - Only logo and auth buttons */}
      <div className={`w-full z-20 px-4 sm:px-6 md:px-8 py-3 sm:py-4 ${
        isAuthPage || isCampaignPage || isDonationPage ? 'bg-white border-b border-gray-200' : 'absolute top-0 left-0'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo/Brand - Clickable to home */}
            <h1 
              onClick={() => navigate('/')} 
              className={`text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer hover:opacity-80 transition-opacity ${
                isAuthPage || isCampaignPage || isDonationPage ? 'text-emerald-700' : 'text-white drop-shadow-lg'
              }`}
            >
              Ihsan Bulsho
            </h1>

            {/* Auth Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button 
                onClick={() => navigate('/signup')}
                className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-md transition-colors ${
                  isAuthPage || isCampaignPage || isDonationPage
                    ? location.pathname === '/signup'
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'border border-emerald-600 text-emerald-700 hover:bg-emerald-50'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Sign up
              </button>
              <button 
                onClick={() => navigate('/login')}
                className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-md transition-colors ${
                  isAuthPage || isCampaignPage || isDonationPage
                    ? location.pathname === '/login'
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'border border-emerald-600 text-emerald-700 hover:bg-emerald-50'
                    : 'bg-white text-emerald-700 hover:bg-gray-100'
                }`}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO - Only show on home page */}
      {!isAuthPage && !isCampaignPage && !isDonationPage && (
        <header
          className="relative w-full min-h-[520px] flex items-center"
          style={{
            backgroundImage: "url('/images/ramadan.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content - Centered with max-width */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="max-w-4xl text-center md:text-left text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Ramadan is around <br className="hidden sm:block" /> the corner!
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8">
                  Will you be among the foremost to do good?
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start">
                  <button 
                    onClick={() => navigate('/signup')}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-md hover:bg-yellow-500 transition-colors"
                  >
                    Join now
                  </button>

                  <button 
                    onClick={() => navigate('/about')}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;