import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { ArrowRightLeft, TrendingUp, Share2, Users } from 'lucide-react';

const EQAnalysis = () => {
  const channels = [
    {
      name: 'Яндекс.Директ / РСЯ',
      leadsEQ: 7011,
      percentage: 51.52,
      color: 'from-orange-500',
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />
    },
    {
      name: 'Прямые визиты',
      leadsEQ: 1707,
      percentage: 12.55,
      color: 'from-indigo-500',
      icon: <Users className="w-6 h-6 text-indigo-500" />
    },
    {
      name: 'Яндекс.Директ / Поиск',
      leadsEQ: 1421,
      percentage: 10.44,
      color: 'from-yellow-500',
      icon: <Share2 className="w-6 h-6 text-yellow-500" />
    },
    {
      name: 'SEO / Яндекс',
      leadsEQ: 1285,
      percentage: 9.44,
      color: 'from-blue-500',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      name: 'SEO / Google',
      leadsEQ: 1213,
      percentage: 8.91,
      color: 'from-green-500',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      name: 'Яндекс.Директ Двери',
      leadsEQ: 345,
      percentage: 2.54,
      color: 'from-purple-500',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    }
  ].sort((a, b) => b.percentage - a.percentage);

  const totalEQ = 13607;

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Анализ участия каналов в сделках (EQ)</h2>
        <p className="text-gray-500 text-center mb-6">Распределение влияния каналов на конверсию</p>

        {/* Общая статистика */}
        <Card className="p-6 mb-8 bg-white">
          <div className="flex items-center justify-center space-x-4">
            <ArrowRightLeft className="w-8 h-8 text-gray-400" />
            <div className="text-center">
              <div className="text-2xl font-bold">{totalEQ.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Общее количество заявок с EQ</div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-8">
          {/* Основной график */}
          <Card className="p-6 bg-white relative">
            <h3 className="text-lg font-semibold mb-6">Распределение влияния каналов</h3>
            <div className="space-y-6">
              {channels.map((channel) => (
                <div key={channel.name} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {channel.icon}
                      <span className="font-medium">{channel.name}</span>
                    </div>
                    <span className="font-bold">{channel.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${channel.color} to-transparent`}
                      style={{ width: `${channel.percentage}%` }}
                    />
                  </div>
                  <div className="mt-1 text-sm text-gray-500 text-right">
                    {channel.leadsEQ.toLocaleString()} заявок
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Детальная информация */}
          <div className="space-y-6">
            {/* Топ каналов */}
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-lg font-semibold mb-4">Ключевые показатели</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm opacity-80">Ведущий канал</div>
                  <div className="text-2xl font-bold">Яндекс.Директ / РСЯ</div>
                  <div className="text-sm opacity-80">51.52% участия</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Покрытие топ-3 каналов</div>
                  <div className="text-2xl font-bold">74.51%</div>
                  <div className="text-sm opacity-80">РСЯ + Прямые визиты + Поиск</div>
                </div>
              </div>
            </Card>

            {/* Распределение по типам */}
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4">Распределение по типам</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Платный трафик (Директ)</span>
                  <span className="font-bold">64.50%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">SEO (Google + Яндекс)</span>
                  <span className="font-bold">18.35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Прямой трафик</span>
                  <span className="font-bold">12.55%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EQAnalysis;
