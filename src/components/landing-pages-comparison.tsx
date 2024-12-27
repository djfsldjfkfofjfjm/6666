import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { Globe, Users, Target } from 'lucide-react';

interface PageMetrics {
  visits: number;
  conversionToLeads: number;
  leads: number;
  conversionToSales: number;
  sales: number;
  revenue: number;
  revenueByDate: number;
  averageCheck: number;
  costs: number;
  roi: number;
  drr: number;
}

interface Page {
  name: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgLight: string;
  metrics: PageMetrics;
}

const LandingPagesComparison = () => {
  const pages: Page[] = [
    {
      name: 'tenevoy.ru/new',
      color: 'from-emerald-500',
      textColor: 'text-emerald-600',
      borderColor: 'border-emerald-200',
      bgLight: 'bg-emerald-50',
      metrics: {
        visits: 1116529,
        conversionToLeads: 0.48,
        leads: 5316,
        conversionToSales: 4.68,
        sales: 249,
        revenue: 18100848,
        revenueByDate: 18932000,
        averageCheck: 72694,
        costs: 11487224,
        roi: 164.81,
        drr: 60.68
      }
    },
    {
      name: 'tenevoy.ru',
      color: 'from-blue-500',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      bgLight: 'bg-blue-50',
      metrics: {
        visits: 960861,
        conversionToLeads: 0.23,
        leads: 2241,
        conversionToSales: 19.1,
        sales: 428,
        revenue: 28057631,
        revenueByDate: 48071215,
        averageCheck: 65555,
        costs: 10572884,
        roi: 454.67,
        drr: 21.99
      }
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
        <h2 className="text-3xl font-bold text-center mb-2">Сравнение посадочных страниц</h2>
        <p className="text-gray-500 text-center mb-12">Анализ эффективности основных лендингов</p>

        <div className="grid grid-cols-2 gap-12">
          {pages.map((page) => (
            <div key={page.name} className="space-y-6">
              {/* Заголовок страницы */}
              <div className={`p-6 rounded-lg bg-gradient-to-r ${page.color} to-white`}>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white">{page.name}</h3>
                </div>
              </div>

              {/* Основные метрики */}
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className={`p-4 rounded-lg ${page.bgLight}`}>
                    <div className="text-sm text-gray-500">Визиты</div>
                    <div className="text-2xl font-bold">
                      {page.metrics.visits.toLocaleString()}
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${page.bgLight}`}>
                    <div className="text-sm text-gray-500">Конверсия в заявки</div>
                    <div className="text-2xl font-bold">{page.metrics.conversionToLeads}%</div>
                  </div>
                </div>

                {/* Воронка конверсии */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className={`w-5 h-5 ${page.textColor}`} />
                      <span>Заявки</span>
                    </div>
                    <div className="font-bold">{page.metrics.leads.toLocaleString()}</div>
                  </div>
                  <div className={`h-1 ${page.bgLight} rounded-full`}>
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${page.color}`}
                      style={{width: `${(page.metrics.leads / page.metrics.visits) * 100}%`}}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className={`w-5 h-5 ${page.textColor}`} />
                      <span>Продажи</span>
                    </div>
                    <div className="font-bold">{page.metrics.sales.toLocaleString()}</div>
                  </div>
                  <div className={`h-1 ${page.bgLight} rounded-full`}>
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${page.color}`}
                      style={{width: `${page.metrics.conversionToSales}%`}}
                    />
                  </div>
                </div>
              </Card>

              {/* Финансовые показатели */}
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Финансовые показатели</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600">Выручка</div>
                    <div className="font-bold">{formatMoney(page.metrics.revenue)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600">Выручка по дате</div>
                    <div className="font-bold">{formatMoney(page.metrics.revenueByDate)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600">Средний чек</div>
                    <div className="font-bold">{formatMoney(page.metrics.averageCheck)}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-600">Расходы</div>
                    <div className="font-bold">{formatMoney(page.metrics.costs)}</div>
                  </div>
                </div>
              </Card>

              {/* KPI */}
              <div className="grid grid-cols-2 gap-4">
                <Card className={`p-4 bg-gradient-to-br ${page.color} to-white text-white`}>
                  <div className="text-sm opacity-90">ROI</div>
                  <div className="text-2xl font-bold">{page.metrics.roi}%</div>
                </Card>
                <Card className={`p-4 bg-gradient-to-br ${page.color} to-white text-white`}>
                  <div className="text-sm opacity-90">ДРР</div>
                  <div className="text-2xl font-bold">{page.metrics.drr}%</div>
                </Card>
              </div>

              {/* Эффективность */}
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Эффективность конверсии</div>
                    <div className="text-lg font-bold">
                      {((page.metrics.sales / page.metrics.leads) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-sm text-gray-500">Стоимость заявки</div>
                    <div className="text-lg font-bold">
                      {formatMoney(page.metrics.costs / page.metrics.leads)}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Сравнительные показатели */}
        <div className="mt-8">
          <Card className="p-6 bg-gray-900 text-white">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-gray-400 mb-2">Более эффективная страница по ROI</div>
                <div className="text-2xl font-bold">
                  {pages.reduce((a, b) => b.metrics.roi > a.metrics.roi ? b : a).name}
                  <span className="text-lg ml-2 text-gray-400">
                    (ROI: {pages.reduce((a, b) => b.metrics.roi > a.metrics.roi ? b : a).metrics.roi}%)
                  </span>
                </div>
              </div>
              <div>
                <div className="text-gray-400 mb-2">Лучшая конверсия в продажи</div>
                <div className="text-2xl font-bold">
                  {pages.reduce((a, b) => b.metrics.conversionToSales > a.metrics.conversionToSales ? b : a).name}
                  <span className="text-lg ml-2 text-gray-400">
                    ({pages.reduce((a, b) => b.metrics.conversionToSales > a.metrics.conversionToSales ? b : a).metrics.conversionToSales}%)
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LandingPagesComparison;
