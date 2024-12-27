import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { Users, Repeat, TrendingUp, Filter, ArrowDownRight } from 'lucide-react';

const YouTubeFunnel = () => {
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
        <h2 className="text-3xl font-bold text-center mb-2">Анализ воронки YouTube</h2>
        <p className="text-gray-500 text-center mb-12">Показатели эффективности</p>

        <div className="grid grid-cols-12 gap-8">
          {/* Основная воронка */}
          <div className="col-span-8">
            <Card className="p-8 bg-white">
              <div className="space-y-8">
                {/* Этап 1: Все заявки */}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-white rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Все заявки</div>
                      <div className="text-2xl font-bold">122</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-red-600">100%</div>
                </div>

                {/* Этап 2: Квалифицированные */}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-white rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <Filter className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Квалифицированные лиды</div>
                      <div className="text-2xl font-bold">49</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-red-600">40.16%</div>
                </div>

                {/* Этап 3: Продажи */}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-white rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Продажи</div>
                      <div className="text-2xl font-bold">16</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-red-600">32.65%</div>
                </div>

                {/* Этап 4: Повторные продажи */}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-white rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <Repeat className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Повторные продажи</div>
                      <div className="text-2xl font-bold">2</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-red-600">12.50%</div>
                </div>

                {/* Конверсия из заявки в продажу */}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-white rounded-lg border-2 border-red-200">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <ArrowDownRight className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Конверсия из заявки в продажу</div>
                      <div className="text-2xl font-bold">13.11%</div>
                    </div>
                  </div>
                  <div className="text-xl text-gray-500">
                    16 / 122
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Боковые метрики */}
          <div className="col-span-4 space-y-6">
            {/* Финансовые показатели */}
            <Card className="p-6 bg-gradient-to-br from-red-500 to-red-700 text-white">
              <h3 className="text-lg font-bold mb-4">Финансовые показатели</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Выручка</span>
                  <span className="font-bold">{formatMoney(853161)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Выручка по оплате</span>
                  <span className="font-bold">{formatMoney(2160198)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Средний чек</span>
                  <span className="font-bold">{formatMoney(53323)}</span>
                </div>
              </div>
            </Card>

            {/* Дополнительные метрики */}
            <Card className="p-6 bg-white">
              <h3 className="text-lg font-bold mb-4">Дополнительные показатели</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Мусорные лиды</span>
                  <div className="text-right">
                    <div className="font-bold">4</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Повторные заявки</span>
                  <div className="text-right">
                    <div className="font-bold">16</div>
                    <div className="text-sm text-gray-500">13.11%</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeFunnel;
