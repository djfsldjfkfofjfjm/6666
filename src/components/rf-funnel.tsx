import React from 'react';
import { Card } from './ui/card';
import { TrendingUp, Target, Users, Repeat, DollarSign, ArrowRightIcon } from 'lucide-react';
import BackButton from './ui/back-button';

interface Metrics {
  adBudget: number;
  qualifiedLeads: number;
  totalLeads: number;
  costPerLead: number;
  costPerLeadTotal: number;
  revenue: number;
  sales: number;
  repeatedSalesPercent: number;
  repeatedRevenue: number;
}

const RFFunnel = () => {
  const metrics: Metrics = {
    adBudget: 30541504,
    qualifiedLeads: 4721,
    totalLeads: 14983,
    costPerLead: 2071.17,
    costPerLeadTotal: 2392.43,
    revenue: 207443247,
    sales: 2761,
    repeatedSalesPercent: 34.86,
    repeatedRevenue: 27547968
  };

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
        <h2 className="text-3xl font-bold text-center mb-2">Воронка продаж РФ</h2>
        <p className="text-gray-500 text-center mb-12">Комплексный анализ показателей</p>

        <div className="relative">
          {/* Верхний уровень - Бюджет и первичные метрики */}
          <div className="flex justify-between items-start mb-16">
            <Card className="w-96 p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="text-lg opacity-80 mb-2">Рекламный бюджет</div>
              <div className="text-3xl font-bold">{formatMoney(metrics.adBudget)}</div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm opacity-80">Эффективность расходов</span>
                <TrendingUp className="w-5 h-5" />
              </div>
            </Card>

            <div className="w-24 h-24 flex items-center justify-center">
              <ArrowRightIcon className="w-12 h-12 text-blue-500" />
            </div>

            <Card className="w-96 p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <div className="text-lg opacity-80 mb-2">Цена обращения</div>
              <div className="text-3xl font-bold">{formatMoney(metrics.costPerLead)}</div>
              <div className="mt-4 text-sm opacity-80">
                С учётом всех затрат: {formatMoney(metrics.costPerLeadTotal)}
              </div>
            </Card>
          </div>

          {/* Центральный блок - Лиды */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-500" />
                <span className="text-lg text-gray-600">Всего лидов</span>
              </div>
              <div className="text-3xl font-bold">{metrics.totalLeads.toLocaleString()}</div>
              <div className="mt-4 text-sm text-gray-500">
                Стоимость лида: {formatMoney(metrics.costPerLead)}
              </div>
            </Card>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
              </div>
              <div className="relative flex justify-center">
                <Card className="p-6 bg-white shadow-lg transform translate-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="w-6 h-6 text-green-500" />
                    <span className="text-lg text-gray-600">Квалифицированные</span>
                  </div>
                  <div className="text-3xl font-bold">{metrics.qualifiedLeads.toLocaleString()}</div>
                  <div className="mt-4 text-sm text-gray-500">
                    {((metrics.qualifiedLeads / metrics.totalLeads) * 100).toFixed(1)}% квалификация
                  </div>
                </Card>
              </div>
            </div>

            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6 text-indigo-500" />
                <span className="text-lg text-gray-600">Продажи</span>
              </div>
              <div className="text-3xl font-bold">{metrics.sales.toLocaleString()}</div>
              <div className="mt-4 text-sm text-gray-500">
                Конверсия: {((metrics.sales / metrics.totalLeads) * 100).toFixed(1)}%
              </div>
            </Card>
          </div>

          {/* Нижний блок - Выручка и повторные продажи */}
          <div className="grid grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-8 h-8" />
                <div>
                  <div className="text-lg opacity-80">Выручка по дате продажи</div>
                  <div className="text-3xl font-bold mt-2">{formatMoney(metrics.revenue)}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <div className="text-sm opacity-80">Продажи по дате</div>
                  <div className="text-xl font-bold mt-1">{metrics.sales.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">ROI</div>
                  <div className="text-xl font-bold mt-1">
                    {((metrics.revenue / metrics.adBudget - 1) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-violet-500 to-violet-600 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Repeat className="w-8 h-8" />
                <div>
                  <div className="text-lg opacity-80">Повторные продажи</div>
                  <div className="text-3xl font-bold mt-2">{metrics.repeatedSalesPercent}%</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm opacity-80">Выручка повторных продаж</div>
                <div className="text-xl font-bold mt-1">{formatMoney(metrics.repeatedRevenue)}</div>
              </div>
            </Card>
          </div>

          {/* Индикаторы эффективности */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <Card className="p-6 bg-gray-900 text-white">
              <div className="text-gray-400 mb-2">Эффективность конверсии</div>
              <div className="text-xl font-bold">
                {((metrics.sales / metrics.totalLeads) * 100).toFixed(1)}%
              </div>
            </Card>
            <Card className="p-6 bg-gray-900 text-white">
              <div className="text-gray-400 mb-2">Доля повторных продаж</div>
              <div className="text-xl font-bold">
                {metrics.repeatedSalesPercent}%
              </div>
            </Card>
            <Card className="p-6 bg-gray-900 text-white">
              <div className="text-gray-400 mb-2">Доля выручки от повторных</div>
              <div className="text-xl font-bold">
                {((metrics.repeatedRevenue / metrics.revenue) * 100).toFixed(1)}%
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RFFunnel;
