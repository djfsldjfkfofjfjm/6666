import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { Users, Target } from 'lucide-react';

interface ChannelMetrics {
  totalLeads: number;
  qualifiedLeads: number;
  qualifiedPercent: number;
  sales: number;
  salesPercent: number;
  repeatedSales: number;
  repeatedSalesPercent: number;
  repeatedRevenue: number;
  revenue: number;
  repeatedRevenuePercent: number;
  drr: number;
  repeatedLeads: number;
  repeatedLeadsPercent: number;
  averageCheck: number;
}

interface Channel {
  name: string;
  color: string;
  textColor: string;
  borderColor: string;
  metrics: ChannelMetrics;
}

const YandexFunnels = () => {
  const channels: Channel[] = [
    {
      name: 'Директ РСЯ',
      color: 'from-orange-500',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      metrics: {
        totalLeads: 6973,
        qualifiedLeads: 2376,
        qualifiedPercent: 34.07,
        sales: 528,
        salesPercent: 7.57,
        repeatedSales: 182,
        repeatedSalesPercent: 34.47,
        repeatedRevenue: 12835539,
        revenue: 44549404,
        repeatedRevenuePercent: 28.81,
        drr: 44.68,
        repeatedLeads: 412,
        repeatedLeadsPercent: 5.91,
        averageCheck: 84374
      }
    },
    {
      name: 'Директ ПОИСК',
      color: 'from-blue-500',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      metrics: {
        totalLeads: 1300,
        qualifiedLeads: 606,
        qualifiedPercent: 46.62,
        sales: 249,
        salesPercent: 19.15,
        repeatedSales: 60,
        repeatedSalesPercent: 24.10,
        repeatedRevenue: 4000351,
        revenue: 30268086,
        repeatedRevenuePercent: 13.22,
        drr: 18.10,
        repeatedLeads: 226,
        repeatedLeadsPercent: 17.38,
        averageCheck: 121558
      }
    },
    {
      name: 'Директ Двери',
      color: 'from-purple-500',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      metrics: {
        totalLeads: 336,
        qualifiedLeads: 95,
        qualifiedPercent: 28.27,
        sales: 26,
        salesPercent: 7.74,
        repeatedSales: 12,
        repeatedSalesPercent: 46.15,
        repeatedRevenue: 1661205,
        revenue: 4132770,
        repeatedRevenuePercent: 40.20,
        drr: 55.93,
        repeatedLeads: 34,
        repeatedLeadsPercent: 10.12,
        averageCheck: 158953
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
        <h2 className="text-3xl font-bold text-center mb-2">Сравнительный анализ воронок Яндекс.Директ</h2>
        <p className="text-gray-500 text-center mb-12">Детальное сравнение эффективности каналов</p>

        <div className="grid grid-cols-3 gap-8">
          {channels.map((channel) => (
            <div key={channel.name} className="space-y-6">
              {/* Заголовок канала */}
              <div className={`p-4 bg-gradient-to-r ${channel.color} to-white rounded-lg text-white`}>
                <h3 className="text-2xl font-bold">{channel.name}</h3>
                <div className="mt-2 opacity-90">ДРР: {channel.metrics.drr}%</div>
              </div>

              {/* Основная воронка */}
              <Card className="p-6 bg-white">
                <div className="space-y-6">
                  {/* Все заявки */}
                  <div className="relative">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Users className={`w-5 h-5 ${channel.textColor}`} />
                        <span>Все заявки</span>
                      </div>
                      <span className="font-bold">{channel.metrics.totalLeads}</span>
                    </div>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full w-full bg-gradient-to-r ${channel.color}`} />
                    </div>
                  </div>

                  {/* Квалифицированные лиды */}
                  <div className="relative">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Target className={`w-5 h-5 ${channel.textColor}`} />
                        <span>Квал. лиды</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{channel.metrics.qualifiedLeads}</div>
                        <div className="text-sm text-gray-500">{channel.metrics.qualifiedPercent}%</div>
                      </div>
                    </div>
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${channel.color}`} 
                        style={{width: `${channel.metrics.qualifiedPercent}%`}}
                      />
                    </div>
                  </div>

                  {/* Продажи и повторные продажи */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-500">Продажи</div>
                      <div className="font-bold text-xl">{channel.metrics.sales}</div>
                      <div className="text-sm">{channel.metrics.salesPercent}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Повторные</div>
                      <div className="font-bold text-xl">{channel.metrics.repeatedSales}</div>
                      <div className="text-sm">{channel.metrics.repeatedSalesPercent}%</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Финансовые показатели */}
              <Card className="p-6 bg-white">
                <h4 className="text-lg font-semibold mb-4">Финансовые метрики</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Выручка</span>
                    <span className="font-bold">{formatMoney(channel.metrics.revenue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Выручка повторных</span>
                    <span className="font-bold">{formatMoney(channel.metrics.repeatedRevenue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Средний чек</span>
                    <span className="font-bold">{formatMoney(channel.metrics.averageCheck)}</span>
                  </div>
                </div>
              </Card>

              {/* Дополнительные метрики */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-white">
                  <div className="text-sm text-gray-500">Повторные заявки</div>
                  <div className="font-bold text-xl">{channel.metrics.repeatedLeads}</div>
                  <div className="text-sm text-gray-500">{channel.metrics.repeatedLeadsPercent}%</div>
                </Card>
                <Card className="p-4 bg-white">
                  <div className="text-sm text-gray-500">% выручки повторных</div>
                  <div className="font-bold text-xl">{channel.metrics.repeatedRevenuePercent}%</div>
                  <div className="text-sm text-gray-500">от общей выручки</div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Сравнительные показатели */}
        <div className="mt-8 grid grid-cols-4 gap-6">
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучший ROI</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                ((b.metrics.revenue / b.metrics.totalLeads) > (a.metrics.revenue / a.metrics.totalLeads)) ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучшая квалификация</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                b.metrics.qualifiedPercent > a.metrics.qualifiedPercent ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучший % повторных</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                b.metrics.repeatedSalesPercent > a.metrics.repeatedSalesPercent ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Самый высокий чек</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                b.metrics.averageCheck > a.metrics.averageCheck ? b : a
              ).name}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default YandexFunnels;
