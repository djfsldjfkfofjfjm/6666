import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { Filter, CheckCircle, TrendingUp } from 'lucide-react';

const FunnelConversion = () => {
  const channels = [
    {
      name: 'Директ РСЯ',
      color: 'from-blue-500',
      metrics: {
        totalLeads: 6973,
        qualifiedLeads: 2376,
        sales: 528,
      }
    },
    {
      name: 'Директ ПОИСК',
      color: 'from-indigo-500',
      metrics: {
        totalLeads: 1300,
        qualifiedLeads: 606,
        sales: 249,
      }
    },
    {
      name: 'Директ Двери',
      color: 'from-violet-500',
      metrics: {
        totalLeads: 336,
        qualifiedLeads: 95,
        sales: 26,
      }
    },
    {
      name: 'ВК - таргет',
      color: 'from-purple-500',
      metrics: {
        totalLeads: 343,
        qualifiedLeads: 90,
        sales: 25,
      }
    },
    {
      name: 'Авито',
      color: 'from-pink-500',
      metrics: {
        totalLeads: 185,
        qualifiedLeads: 17,
        sales: 1,
      }
    },
    {
      name: 'TG',
      color: 'from-sky-500',
      metrics: {
        totalLeads: 88,
        qualifiedLeads: 36,
        sales: 3,
      }
    },
    {
      name: 'Инстаграм',
      color: 'from-rose-500',
      metrics: {
        totalLeads: 985,
        qualifiedLeads: 140,
        sales: 173,
      }
    },
    {
      name: 'SEO Яндекс',
      color: 'from-amber-500',
      metrics: {
        totalLeads: 1119,
        qualifiedLeads: 550,
        sales: 242,
      }
    },
    {
      name: 'SEO Google',
      color: 'from-emerald-500',
      metrics: {
        totalLeads: 1156,
        qualifiedLeads: 524,
        sales: 276,
      }
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Воронки конверсии по каналам</h2>
        <p className="text-gray-500 text-center mb-12">Анализ прогрессии от заявок к продажам</p>

        <div className="grid grid-cols-3 gap-8">
          {channels.map((channel) => (
            <Card key={channel.name} className="p-6 bg-white relative overflow-hidden">
              {/* Фоновая воронка */}
              <div className="absolute inset-0 opacity-5">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,0 L100,0 L80,100 L20,100 Z" className={`fill-current ${channel.color.replace('from-', 'text-')}`} />
                </svg>
              </div>

              <div className="relative">
                {/* Заголовок */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">{channel.name}</h3>
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${channel.color}`} />
                </div>

                {/* Метрики */}
                <div className="space-y-6">
                  {/* Все заявки */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Filter className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-500">Все заявки</div>
                        <div className="font-bold text-xl">{channel.metrics.totalLeads.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">100%</div>
                  </div>

                  {/* Квалифицированные */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-500">Квалифицированные</div>
                        <div className="font-bold text-xl">{channel.metrics.qualifiedLeads.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">
                      {((channel.metrics.qualifiedLeads / channel.metrics.totalLeads) * 100).toFixed(1)}%
                    </div>
                  </div>

                  {/* Продажи */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-500">Продажи</div>
                        <div className="font-bold text-xl">{channel.metrics.sales.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold">
                      {((channel.metrics.sales / channel.metrics.totalLeads) * 100).toFixed(1)}%
                    </div>
                  </div>

                  {/* Прогресс-бары */}
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: '100%'}}
                      />
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: `${(channel.metrics.qualifiedLeads / channel.metrics.totalLeads) * 100}%`}}
                      />
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                        style={{width: `${(channel.metrics.sales / channel.metrics.totalLeads) * 100}%`}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Сводная статистика */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучший % квалификации</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                ((b.metrics.qualifiedLeads / b.metrics.totalLeads) > (a.metrics.qualifiedLeads / a.metrics.totalLeads)) ? b : a
              ).name}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {(channels.reduce((a, b) => 
                ((b.metrics.qualifiedLeads / b.metrics.totalLeads) > (a.metrics.qualifiedLeads / a.metrics.totalLeads)) ? b : a
              ).metrics.qualifiedLeads / channels.reduce((a, b) => 
                ((b.metrics.qualifiedLeads / b.metrics.totalLeads) > (a.metrics.qualifiedLeads / a.metrics.totalLeads)) ? b : a
              ).metrics.totalLeads * 100).toFixed(1)}%
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лучшая конверсия в продажи</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                ((b.metrics.sales / b.metrics.totalLeads) > (a.metrics.sales / a.metrics.totalLeads)) ? b : a
              ).name}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {(channels.reduce((a, b) => 
                ((b.metrics.sales / b.metrics.totalLeads) > (a.metrics.sales / a.metrics.totalLeads)) ? b : a
              ).metrics.sales / channels.reduce((a, b) => 
                ((b.metrics.sales / b.metrics.totalLeads) > (a.metrics.sales / a.metrics.totalLeads)) ? b : a
              ).metrics.totalLeads * 100).toFixed(1)}%
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Наибольший объём заявок</div>
            <div className="text-xl font-bold">
              {channels.reduce((a, b) => 
                b.metrics.totalLeads > a.metrics.totalLeads ? b : a
              ).name}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {channels.reduce((a, b) => 
                b.metrics.totalLeads > a.metrics.totalLeads ? b : a
              ).metrics.totalLeads.toLocaleString()} заявок
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FunnelConversion;
