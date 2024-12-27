import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SocialNavigation = () => {
  const location = useLocation();

  const socialNetworks = [
    {
      name: 'Instagram',
      path: '/instagram-funnel',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'ВКонтакте',
      path: '/vk-funnel',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Telegram',
      path: '/telegram-funnel',
      color: 'from-sky-400 to-sky-500'
    },
    {
      name: 'WhatsApp',
      path: '/whatsapp-funnel',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="bg-white shadow-sm mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-1">
          {socialNetworks.map((network) => (
            <Link
              key={network.path}
              to={network.path}
              className={`flex-1 text-center py-4 px-6 transition-all duration-200 ${
                location.pathname === network.path
                  ? `bg-gradient-to-r ${network.color} text-white`
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">{network.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialNavigation;
