import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { Link } from 'lucide-react';

interface Page {
  name: string;
  visits: number;
  leads: number;
  conversion: number;
  sales: number;
  conversionToSales: number;
  revenue: number;
  costs: number;
  roi: number;
  drr: number;
  avgCheck: number;
}

const StorePages = () => {
  const pages: Page[] = [
    {
      name: 'tenevoy.store/catalog/products/profile-tip7',
      visits: 63557,
      leads: 112,
      conversion: 0.18,
      sales: 11,
      conversionToSales: 9.82,
      revenue: 721367,
      costs: 582083,
      roi: 123.93,
      drr: 80.69,
      avgCheck: 65579
    },
    {
      name: 'tenevoy.store/catalog/products/profile-tip8',
      visits: 60492,
      leads: 219,
      conversion: 0.36,
      sales: 20,
      conversionToSales: 9.13,
      revenue: 636740,
      costs: 706995,
      roi: 90.06,
      drr: 111.03,
      avgCheck: 31837
    },
    {
      name: 'tenevoy.store',
      visits: 29164,
      leads: 40,
      conversion: 0.14,
      sales: 10,
      conversionToSales: 25,
      revenue: 475440,
      costs: 485247,
      roi: 110.46,
      drr: 90.53,
      avgCheck: 47544
    },
    {
      name: 'tenevoy.store/catalog/products/door-hidden',
      visits: 25360,
      leads: 32,
      conversion: 0.13,
      sales: 5,
      conversionToSales: 15.63,
      revenue: 516118,
      costs: 636987,
      roi: 81.02,
      drr: 123.42,
      avgCheck: 103224
    }
  ];

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Анализ страниц tenevoy.store</h2>
        <p className="text-gray-500 text-center mb-12">Эффективность разделов магазина</p>

        <div className="space-y-8">
          {pages.map((page) => (
            <Card key={page.name} className="p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
              {/* Декоративный элемент */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />
              
              <div className="ml-4">
                {/* Заголовок страницы */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <Link className="w-6 h-6 text-purple-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{page.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{page.visits.toLocaleString()} визитов</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">ROI</div>
                    <div className={`text-lg font-bold ${page.roi >= 100 ? 'text-green-600' : 'text-red-600'}`}>
                      {page.roi}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {/* Конверсионная воронка */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-700">Конверсионная воронка</h4>
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg space-y-3">
                      <div>
                        <div className="flex justify-between text-sm">
                          <span>Конверсия в заявки</span>
                          <span className="font-semibold">{page.conversion}%</span>
                        </div>
                        <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{width: `${page.conversion * 100}%`}}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm">
                          <span>Конверсия в продажи</span>
                          <span className="font-semibold">{page.conversionToSales}%</span>
                        </div>
                        <div className="mt-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{width: `${page.conversionToSales}%`}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Объемные показатели */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-700">Показатели объема</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Заявки</div>
                        <div className="font-bold text-lg">{page.leads}</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Продажи</div>
                        <div className="font-bold text-lg">{page.sales}</div>
                      </div>
                    </div>
                  </div>

                  {/* Финансовые показатели */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-700">Финансы</h4>
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Выручка</span>
                        <span className="font-bold">{formatMoney(page.revenue)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Расходы</span>
                        <span className="font-bold">{formatMoney(page.costs)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Средний чек</span>
                        <span className="font-bold">{formatMoney(page.avgCheck)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">ДРР</span>
                        <span className="font-bold">{page.drr}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Сводные показатели */}
        <div className="mt-8 grid grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <div className="text-sm opacity-80 mb-2">Лучший ROI</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => a.roi > b.roi ? a : b).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 opacity-80">
              ROI: {pages.reduce((a, b) => a.roi > b.roi ? a : b).roi}%
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <div className="text-sm opacity-80 mb-2">Лучшая конверсия</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => a.conversion > b.conversion ? a : b).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 opacity-80">
              {pages.reduce((a, b) => a.conversion > b.conversion ? a : b).conversion}%
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <div className="text-sm opacity-80 mb-2">Высший средний чек</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => a.avgCheck > b.avgCheck ? a : b).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 opacity-80">
              {formatMoney(pages.reduce((a, b) => a.avgCheck > b.avgCheck ? a : b).avgCheck)}
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <div className="text-sm opacity-80 mb-2">Наибольшая выручка</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => a.revenue > b.revenue ? a : b).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 opacity-80">
              {formatMoney(pages.reduce((a, b) => a.revenue > b.revenue ? a : b).revenue)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StorePages;
