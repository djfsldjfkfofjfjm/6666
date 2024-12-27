import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { TrendingUp } from 'lucide-react';

interface PageMetrics {
  visits: number;
  leads: number;
  conversion: number;
  sales: number;
  conversionToSales: number;
  revenue: number;
  revenueByDate: number;
  costs: number;
  roi: number;
  drr: number;
  avgCheck: number;
}

interface Page {
  name: string;
  metrics: PageMetrics;
  color: string;
}

const MainSitePages = () => {
  const pages: Page[] = [
    {
      name: 'tenevoy.ru',
      metrics: {
        visits: 960861,
        leads: 2241,
        conversion: 0.23,
        sales: 428,
        conversionToSales: 19.1,
        revenue: 28057631,
        revenueByDate: 48071215,
        costs: 10572884,
        roi: 454.67,
        drr: 21.99,
        avgCheck: 65555
      },
      color: 'from-emerald-500'
    },
    {
      name: 'tenevoy.ru/free',
      metrics: {
        visits: 32998,
        leads: 223,
        conversion: 0.68,
        sales: 25,
        conversionToSales: 11.21,
        revenue: 2192810,
        revenueByDate: 3630893,
        costs: 634022,
        roi: 572.68,
        drr: 17.46,
        avgCheck: 87712
      },
      color: 'from-violet-500'
    },
    {
      name: 'tenevoy.ru/shadowdoors',
      metrics: {
        visits: 5275,
        leads: 21,
        conversion: 0.40,
        sales: 6,
        conversionToSales: 28.57,
        revenue: 1132889,
        revenueByDate: 1132889,
        costs: 221275,
        roi: 511.98,
        drr: 19.53,
        avgCheck: 188815
      },
      color: 'from-blue-500'
    },
    {
      name: 'tenevoy.ru/type2',
      metrics: {
        visits: 563,
        leads: 8,
        conversion: 1.42,
        sales: 4,
        conversionToSales: 50,
        revenue: 792015,
        revenueByDate: 792015,
        costs: 38470,
        roi: 2058.79,
        drr: 4.86,
        avgCheck: 198004
      },
      color: 'from-indigo-500'
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
        <h2 className="text-3xl font-bold text-center mb-2">Анализ страниц tenevoy.ru</h2>
        <p className="text-gray-500 text-center mb-12">Эффективность разделов основного сайта</p>

        <div className="grid grid-cols-2 gap-8">
          {pages.map((page) => (
            <Card key={page.name} className="relative p-6 overflow-hidden">
              {/* Фоновая графика */}
              <div className="absolute -right-20 -top-20 w-40 h-40 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-black to-gray-500 transform rotate-45" />
              </div>

              {/* Заголовок */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${page.color}`} />
                  <div>
                    <h3 className="text-xl font-bold">{page.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {page.metrics.visits.toLocaleString()} визитов
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className={`w-5 h-5 ${page.color.replace('from', 'text')}`} />
                  <div className="text-right">
                    <div className="text-sm text-gray-500">ROI</div>
                    <div className="font-bold">{page.metrics.roi}%</div>
                  </div>
                </div>
              </div>

              {/* Основные метрики */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">Конверсия в заявки</div>
                  <div className="text-xl font-bold">{page.metrics.conversion}%</div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${page.color}`}
                      style={{width: `${page.metrics.conversion * 100}%`}}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">Конверсия в продажи</div>
                  <div className="text-xl font-bold">{page.metrics.conversionToSales}%</div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${page.color}`}
                      style={{width: `${page.metrics.conversionToSales}%`}}
                    />
                  </div>
                </div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <div className="text-sm text-gray-500">Заявки</div>
                  <div className="font-bold">{page.metrics.leads}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <div className="text-sm text-gray-500">Продажи</div>
                  <div className="font-bold">{page.metrics.sales}</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <div className="text-sm text-gray-500">ДРР</div>
                  <div className="font-bold">{page.metrics.drr}%</div>
                </div>
              </div>

              {/* Финансовые показатели */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Выручка</span>
                  <span className="font-bold">{formatMoney(page.metrics.revenue)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Выручка по дате</span>
                  <span className="font-bold">{formatMoney(page.metrics.revenueByDate)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Средний чек</span>
                  <span className="font-bold">{formatMoney(page.metrics.avgCheck)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Расходы</span>
                  <span className="font-bold">{formatMoney(page.metrics.costs)}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Сводные показатели */}
        <div className="mt-8 grid grid-cols-4 gap-6">
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучшая конверсия</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => b.metrics.conversion > a.metrics.conversion ? b : a).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 text-gray-400">
              {pages.reduce((a, b) => b.metrics.conversion > a.metrics.conversion ? b : a).metrics.conversion}%
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Максимальный ROI</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => b.metrics.roi > a.metrics.roi ? b : a).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 text-gray-400">
              {pages.reduce((a, b) => b.metrics.roi > a.metrics.roi ? b : a).metrics.roi}%
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучший средний чек</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => b.metrics.avgCheck > a.metrics.avgCheck ? b : a).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 text-gray-400">
              {formatMoney(pages.reduce((a, b) => b.metrics.avgCheck > a.metrics.avgCheck ? b : a).metrics.avgCheck)}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Минимальный ДРР</div>
            <div className="text-xl font-bold">
              {pages.reduce((a, b) => b.metrics.drr < a.metrics.drr ? b : a).name.split('/').pop()}
            </div>
            <div className="text-sm mt-1 text-gray-400">
              {pages.reduce((a, b) => b.metrics.drr < a.metrics.drr ? b : a).metrics.drr}%
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainSitePages;
