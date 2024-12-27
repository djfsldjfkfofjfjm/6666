import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Главная' },
    { path: '/channel-metrics', label: 'Метрики каналов' },
    { path: '/eq-analysis', label: 'EQ анализ' },
    { path: '/funnel-conversion', label: 'Воронка конверсии' },
    { path: '/regional', label: 'Регионы' },
    { path: '/rf', label: 'РФ воронка' },
    { path: '/kazakhstan', label: 'Казахстан' },
    { path: '/uae', label: 'ОАЭ' },
    { path: '/landing-pages', label: 'Лендинги' },
    { path: '/main-pages', label: 'Основные страницы' },
    { path: '/store-pages', label: 'Страницы магазина' },
    { path: '/instagram-funnel', label: 'Instagram' },
    { path: '/vk-funnel', label: 'VK' },
    { path: '/telegram-funnel', label: 'Telegram' },
    { path: '/whatsapp-funnel', label: 'WhatsApp' },
    { path: '/yandex-funnels', label: 'Яндекс' },
    { path: '/youtube-funnel', label: 'YouTube' },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Годовой отчет 2024</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Отчеты
                </button>
                <div className="absolute z-50 left-0 mt-2 w-56 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-out origin-top-right">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-2 bg-white p-4">
                      {links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`${
                            location.pathname === link.path
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700 hover:bg-gray-50'
                          } block px-4 py-2 text-sm rounded-md`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
