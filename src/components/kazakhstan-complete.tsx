import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { TrendingUp, Users, Target, DollarSign, Percent, ArrowDown } from 'lucide-react';

interface ChannelMetrics {
  cost: number;
  leads: number;
  cpa: number;
  sales: number | null;
  revenue: number | null;
}

interface Channel {
  name: string;
  color: string;
  metrics: ChannelMetrics;
}

const KazakhstanComplete = () => {
  const channels: Channel[] = [
    {
      name: 'Google - Поиск',
      color: 'from-green-500',
      metrics: {
        cost: 15389,
        leads: 43,
        cpa: 357.88,
        sales: null,
        revenue: null
      }
    },
    {
      name: 'Facebook',
      color: 'from-blue-500',
      metrics: {
        cost: 853000,
        leads: 679,
        cpa: 1256.26,
        sales: null,
        revenue: null
      }
    },
    {
      name: 'Яндекс.Директ',
      color: 'from-red-500',
      metrics: {
        cost: 744547,
        leads: 863,
        cpa: 862.74,
        sales: null,
        revenue: null
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
        <h2 className="text-3xl font-bold text-center mb-2">Комплексный анализ Казахстана</h2>
        <p className="text-gray-500 text-center mb-12">Общие показатели и детализация по каналам</p>

        {/* Основные метрики */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <DollarSign className="w-8 h-8" />
              <div>
                <div className="text-sm opacity-80">Рекламный бюджет</div>
                <div className="text-2xl font-bold">{formatMoney(1612936)}</div>
              </div>
            </div>
            <div className="text-sm opacity-80">Общие затраты на рекламу</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="w-8 h-8" />
              <div>
                <div className="text-sm opacity-80">Лиды (факт)</div>
                <div className="text-2xl font-bold">2 887</div>
              </div>
            </div>
            <div className="text-sm opacity-80">Общее количество обращений</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="w-8 h-8" />
              <div>
                <div className="text-sm opacity-80">Продажи</div>
                <div className="text-2xl font-bold">64</div>
              </div>
            </div>
            <div className="text-sm opacity-80">Количество успешных сделок</div>
          </Card>
        </div>

        {/* Финансовые показатели */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
              Финансовые показатели
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Выручка по дате продажи</span>
                <span className="font-bold">{formatMoney(6060457)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">ФОТ</span>
                <span className="font-bold">{formatMoney(1025550)}</span>
              </div>
              <div className="h-px bg-gray-100 my-4" />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Средний чек</span>
                <span className="font-bold">{formatMoney(6060457 / 64)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Percent className="w-5 h-5 mr-2 text-blue-500" />
              Эффективность
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Цена обращения (факт)</span>
                <span className="font-bold">{formatMoney(558.69)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Цена обращения (с учетом затрат)</span>
                <span className="font-bold">{formatMoney(913.92)}</span>
              </div>
              <div className="h-px bg-gray-100 my-4" />
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Доля рекламных расходов (ДРР)</span>
                <span className="font-bold">26.6%</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Разделитель */}
        <div className="flex items-center justify-center mb-12">
          <ArrowDown className="w-8 h-8 text-gray-400" />
          <div className="text-lg font-semibold text-gray-500 ml-3">Детализация по каналам</div>
        </div>

        {/* Каналы */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {channels.map(channel => (
            <Card key={channel.name} className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${channel.color}`} />
                <h3 className="text-xl font-bold">{channel.name}</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Расходы на рекламу</div>
                  <div className="text-2xl font-bold">{formatMoney(channel.metrics.cost)}</div>
                  <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                      style={{width: `${(channel.metrics.cost / 853000) * 100}%`}}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Заявки</div>
                  <div className="text-2xl font-bold">{channel.metrics.leads}</div>
                  <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                      style={{width: `${(channel.metrics.leads / 863) * 100}%`}}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">CPA</div>
                  <div className="text-2xl font-bold">{formatMoney(channel.metrics.cpa)}</div>
                  <div className="h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${channel.color}`}
                      style={{width: `${(channel.metrics.cpa / 1256.26) * 100}%`}}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Дополнительные источники */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Дополнительные источники заявок</h3>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-sm text-gray-500">WhatsApp переписки</div>
              <div className="text-2xl font-bold">955</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Переписки Instagram и Facebook</div>
              <div className="text-2xl font-bold">174</div>
            </div>
          </div>
        </Card>

        {/* Общие показатели */}
        <div className="grid grid-cols-3 gap-6">
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Всего заявок</div>
            <div className="text-xl font-bold">2 887</div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Средний CPC</div>
            <div className="text-xl font-bold">{formatMoney(8.53)}</div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Всего визитов на сайт</div>
            <div className="text-xl font-bold">188 995</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KazakhstanComplete;
