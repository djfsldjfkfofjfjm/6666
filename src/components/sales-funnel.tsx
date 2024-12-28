import React from 'react';
import { Card } from './ui/card';
import { ArrowDownIcon, TrendingUp, Target, Users, Repeat, LineChart } from 'lucide-react';

const SalesFunnel = () => {
  const metrics = {
    adBudget: 30541504,
    fot: 4737320,
    totalLeads: 17864,
    qualifiedLeads: 4581,
    sales: 2588,
    revenue: 220799611,
    repeatedSalesPercent: 19.13,
    repeatedRevenue: 49170757,
    costPerLead: 1974.86,
    visits: 2577174
  };

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-white">Воронка продаж</h2>
          <p className="text-neutral-400 text-center mb-12">Анализ эффективности маркетинга</p>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2" />

            <div className="space-y-16">
              {/* Посещения */}
              <div className="relative">
                <Card className="w-96 p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white mx-auto border-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <LineChart className="w-6 h-6" />
                    <span className="text-lg">Посещения сайта</span>
                  </div>
                  <div className="text-3xl font-bold">{metrics.visits.toLocaleString()}</div>
                </Card>
              </div>

              {/* Бюджет */}
              <div className="relative">
                <Card className="w-96 p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white mx-auto border-0">
                  <div className="text-lg opacity-80 mb-2">Общий бюджет</div>
                  <div className="text-3xl font-bold">{formatMoney(metrics.adBudget + metrics.fot)}</div>
                  <div className="mt-4 text-sm opacity-80 flex justify-between">
                    <span>Реклама: {formatMoney(metrics.adBudget)}</span>
                    <span>ФОТ: {formatMoney(metrics.fot)}</span>
                  </div>
                  <div className="mt-2 text-sm opacity-80">
                    Стоимость обращения: {formatMoney(metrics.costPerLead)}
                  </div>
                </Card>
              </div>

              {/* Лиды */}
              <div className="grid grid-cols-2 gap-24">
                <div className="relative">
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                    <ArrowDownIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <Card className="p-6 bg-neutral-900 border-neutral-800">
                    <div className="flex items-center space-x-3 mb-4">
                      <Users className="w-6 h-6 text-blue-500" />
                      <span className="text-lg text-white">Всего лидов</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{metrics.totalLeads.toLocaleString()}</div>
                    <div className="mt-2 text-sm text-neutral-400">
                      Конверсия из посещений: {((metrics.totalLeads / metrics.visits) * 100).toFixed(1)}%
                    </div>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                    <ArrowDownIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <Card className="p-6 bg-neutral-900 border-neutral-800">
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-6 h-6 text-green-500" />
                      <span className="text-lg text-white">Квалифицированные лиды</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{metrics.qualifiedLeads.toLocaleString()}</div>
                    <div className="mt-2 text-sm text-neutral-400">
                      {((metrics.qualifiedLeads / metrics.totalLeads) * 100).toFixed(1)}% от всех лидов
                    </div>
                  </Card>
                </div>
              </div>

              {/* Продажи */}
              <div className="grid grid-cols-2 gap-24">
                <div className="relative">
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                    <ArrowDownIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <Card className="p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingUp className="w-6 h-6" />
                      <span className="text-lg">Продажи</span>
                    </div>
                    <div className="text-3xl font-bold">{metrics.sales.toLocaleString()}</div>
                    <div className="mt-4 text-sm opacity-80">
                      Конверсия из лидов: {((metrics.sales / metrics.totalLeads) * 100).toFixed(1)}%
                    </div>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                    <ArrowDownIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <Repeat className="w-6 h-6" />
                      <span className="text-lg">Повторные продажи</span>
                    </div>
                    <div className="text-3xl font-bold">{metrics.repeatedSalesPercent}%</div>
                    <div className="mt-4 text-sm opacity-80">
                      Выручка: {formatMoney(metrics.repeatedRevenue)}
                    </div>
                  </Card>
                </div>
              </div>

              {/* Итоговая выручка */}
              <div className="relative">
                <Card className="w-96 p-6 bg-gradient-to-br from-green-600 to-emerald-700 text-white mx-auto border-0">
                  <div className="text-lg opacity-80 mb-2">Общая выручка</div>
                  <div className="text-3xl font-bold">{formatMoney(metrics.revenue)}</div>
                  <div className="mt-4 text-sm opacity-80">
                    ROI: {((metrics.revenue / (metrics.adBudget + metrics.fot) - 1) * 100).toFixed(1)}%
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFunnel;
