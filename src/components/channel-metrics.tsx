import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { TrendingUp, DollarSign, Users, Target, Repeat } from 'lucide-react';

const ChannelAnalysis = () => {
  const channels = [
    {
      name: 'Директ РСЯ',
      color: 'from-blue-500',
      metrics: {
        spend: 19903165,
        leads: 6973,
        sales: 528,
        revenue: 44549404,
        drr: 44.68,
        repeatedSales: 182,
        repeatedRevenue: 12835539
      }
    },
    {
      name: 'Директ ПОИСК',
      color: 'from-indigo-500',
      metrics: {
        spend: 5479469,
        leads: 1300,
        sales: 249,
        revenue: 30268086,
        drr: 18.10,
        repeatedSales: 60,
        repeatedRevenue: 4000351
      }
    },
    {
      name: 'Директ Двери',
      color: 'from-violet-500',
      metrics: {
        spend: 2311529,
        leads: 336,
        sales: 26,
        revenue: 4132770,
        drr: 55.93,
        repeatedSales: 12,
        repeatedRevenue: 1661205
      }
    },
    {
      name: 'ВК - таргет',
      color: 'from-purple-500',
      metrics: {
        spend: 1144090,
        leads: 343,
        sales: 25,
        revenue: 3894477,
        drr: 29.38,
        repeatedSales: 10,
        repeatedRevenue: 1770688
      }
    },
    {
      name: 'Авито',
      color: 'from-pink-500',
      metrics: {
        spend: 40833,
        leads: 185,
        sales: 1,
        revenue: 9900,
        drr: 0,
        repeatedSales: 0,
        repeatedRevenue: 0
      }
    },
    {
      name: 'TG (таргет и интеграции)',
      color: 'from-sky-500',
      metrics: {
        spend: 1405808,
        leads: 88,
        sales: 3,
        revenue: 980038,
        drr: 143.44,
        repeatedSales: 0,
        repeatedRevenue: 0
      }
    },
    {
      name: 'Инстаграм',
      color: 'from-rose-500',
      metrics: {
        spend: 256610,
        leads: 985,
        sales: 173,
        revenue: 20717722,
        drr: 1.24,
        repeatedSales: 114,
        repeatedRevenue: 7280185
      }
    },
    {
      name: 'SEO Яндекс',
      color: 'from-amber-500',
      metrics: {
        spend: 0,
        leads: 1119,
        sales: 242,
        revenue: 16440631,
        drr: 0,
        repeatedSales: 64,
        repeatedRevenue: 4411419
      }
    },
    {
      name: 'SEO Google',
      color: 'from-emerald-500',
      metrics: {
        spend: 0,
        leads: 1156,
        sales: 276,
        revenue: 21708024,
        drr: 0,
        repeatedSales: 79,
        repeatedRevenue: 6605655
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

  const getMetricWidth = (value: number, maxValue: number) => {
    return `${(value / maxValue) * 100}%`;
  };

  const maxValues = {
    spend: Math.max(...channels.map(c => c.metrics.spend)),
    leads: Math.max(...channels.map(c => c.metrics.leads)),
    sales: Math.max(...channels.map(c => c.metrics.sales)),
    revenue: Math.max(...channels.map(c => c.metrics.revenue)),
    repeatedSales: Math.max(...channels.map(c => c.metrics.repeatedSales)),
    repeatedRevenue: Math.max(...channels.map(c => c.metrics.repeatedRevenue))
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Эффективность каналов привлечения</h2>
        <p className="text-gray-500 text-center mb-12">Сравнительный анализ показателей по каналам</p>

        <div className="space-y-8">
          {channels.map((channel) => (
            <Card key={channel.name} className="p-6 bg-white">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${channel.color}`} />
                  <div>
                    <h3 className="text-xl font-bold">{channel.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      ROI: {((channel.metrics.revenue / (channel.metrics.spend || 1) - 1) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
                <div className="text-2xl font-bold">
                  {channel.metrics.drr > 0 ? `ДРР: ${channel.metrics.drr}%` : 'Органический трафик'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  {/* Расходы и основные метрики */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Расходы
                      </span>
                      <span>{formatMoney(channel.metrics.spend)}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: getMetricWidth(channel.metrics.spend, maxValues.spend)}}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Лиды
                      </span>
                      <span>{channel.metrics.leads.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: getMetricWidth(channel.metrics.leads, maxValues.leads)}}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span className="flex items-center">
                        <Target className="w-4 h-4 mr-1" />
                        Продажи
                      </span>
                      <span>{channel.metrics.sales.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: getMetricWidth(channel.metrics.sales, maxValues.sales)}}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Выручка и повторные продажи */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Выручка
                      </span>
                      <span>{formatMoney(channel.metrics.revenue)}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: getMetricWidth(channel.metrics.revenue, maxValues.revenue)}}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span className="flex items-center">
                        <Repeat className="w-4 h-4 mr-1" />
                        Повторные продажи
                      </span>
                      <span>{channel.metrics.repeatedSales.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: getMetricWidth(channel.metrics.repeatedSales, maxValues.repeatedSales)}}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span className="flex items-center">
                        <Repeat className="w-4 h-4 mr-1" />
                        Выручка повторных
                      </span>
                      <span>{formatMoney(channel.metrics.repeatedRevenue)}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: getMetricWidth(channel.metrics.repeatedRevenue, maxValues.repeatedRevenue)}}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Показатели эффективности */}
              <div className="mt-4 pt-4 border-t grid grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-500">CPL</div>
                  <div className="font-bold">
                    {formatMoney(channel.metrics.spend / channel.metrics.leads)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Конверсия</div>
                  <div className="font-bold">
                    {((channel.metrics.sales / channel.metrics.leads) * 100).toFixed(1)}%
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">% повторных продаж</div>
                  <div className="font-bold">
                    {((channel.metrics.repeatedSales / channel.metrics.sales) * 100).toFixed(1)}%
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">% выручки повторных</div>
                  <div className="font-bold">
                    {((channel.metrics.repeatedRevenue / channel.metrics.revenue) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Сводные показатели */}
        <div className="mt-8 grid grid-cols-4 gap-6">
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучший ROI</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                ((b.metrics.revenue / (b.metrics.spend || 1)) > (a.metrics.revenue / (a.metrics.spend || 1))) ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Наибольшая выручка</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                b.metrics.revenue > a.metrics.revenue ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучшая конверсия в повторные</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                ((b.metrics.repeatedSales / b.metrics.sales) > (a.metrics.repeatedSales / a.metrics.sales)) ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лидер по повторной выручке</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                b.metrics.repeatedRevenue > a.metrics.repeatedRevenue ? b : a
              ).name}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChannelAnalysis;
