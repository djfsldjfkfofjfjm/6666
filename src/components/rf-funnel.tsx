import React from 'react';
import { Card } from './ui/card';
import { ArrowDownIcon, TrendingUp, Target, Users, Repeat, DollarSign, Eye, Heart, BriefcaseIcon, BarChart3, LineChart, PieChart } from 'lucide-react';
import BackButton from './ui/back-button';

const SalesFunnel = () => {
  const metrics = {
    visits: 2577174,
    socialGrowth: 12575,
    adBudget: 30541504,
    salary: 4737320,
    totalLeads: 17864,
    costPerLead: 1709.67,
    costPerLeadWithSalary: 1974.86,
    salesFromAds: 2588,
    totalSales: 7164,
    revenueFromAds: 220799611,
    newClientsRevenue: 204205914,
    repeatedRevenue: 49170757,
    totalRevenuePeriod: 389265765,
    totalRevenueSold: 470103503
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
        <h2 className="text-3xl font-bold text-center mb-2">Воронка продаж РФ 2024</h2>
        <p className="text-gray-500 text-center mb-8">Комплексный анализ эффективности продаж</p>
        
        {/* Секция 1: Трафик и охват */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Трафик и социальные сети</h3>
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-6 h-6 text-blue-500" />
                <span className="text-lg text-gray-600">Визиты</span>
              </div>
              <div className="text-3xl font-bold">{metrics.visits.toLocaleString()}</div>
              <div className="mt-2 text-sm text-gray-500">
                Общий трафик на сайт
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-pink-500" />
                <span className="text-lg text-gray-600">Прирост подписчиков в соцсетях</span>
              </div>
              <div className="text-3xl font-bold">+{metrics.socialGrowth.toLocaleString()}</div>
              <div className="mt-2 text-sm text-gray-500">
                Новые подписчики за период
              </div>
            </Card>
          </div>
        </div>

        {/* Секция 2: Затраты */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Инвестиции</h3>
          <div className="grid grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-6 h-6" />
                <span className="text-lg">Рекламный БЮДЖЕТ</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.adBudget)}</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <BriefcaseIcon className="w-6 h-6" />
                <span className="text-lg">ФОТ</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.salary)}</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <LineChart className="w-6 h-6" />
                <span className="text-lg">Общие затраты</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.adBudget + metrics.salary)}</div>
            </Card>
          </div>
        </div>

        {/* Секция 3: Лиды */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Лиды и обращения</h3>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-blue-500" />
                <span className="text-lg text-gray-600">Лиды (не созданные самостоятельно)</span>
              </div>
              <div className="text-3xl font-bold">{metrics.totalLeads.toLocaleString()}</div>
            </Card>

            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-indigo-500" />
                <span className="text-lg text-gray-600">Всего лидов вместе с созданными самостоятельно</span>
              </div>
              <div className="text-3xl font-bold">23,524</div>
              <div className="mt-2 text-sm text-gray-500">
                Все из Роистат
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-6 h-6 text-green-500" />
                <span className="text-lg text-gray-600">Цена обращения (не созданные самостоятельно)</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.costPerLead)}</div>
            </Card>

            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <PieChart className="w-6 h-6 text-orange-500" />
                <span className="text-lg text-gray-600">Цена обращения (с ФОТ)</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.costPerLeadWithSalary)}</div>
            </Card>
          </div>
        </div>

        {/* Секция 4: Продажи */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Продажи</h3>
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6" />
                <span className="text-lg">Продажи (есть источник, НЕ созданные самостоятельно)</span>
              </div>
              <div className="text-3xl font-bold">{metrics.salesFromAds.toLocaleString()}</div>
              <div className="mt-2 text-sm opacity-80">
                Конверсия: {((metrics.salesFromAds / metrics.totalLeads) * 100).toFixed(1)}%
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Repeat className="w-6 h-6" />
                <span className="text-lg">Все продажи из Роистат по дате продажи</span>
              </div>
              <div className="text-3xl font-bold">{metrics.totalSales.toLocaleString()}</div>
            </Card>
          </div>
        </div>

        {/* Секция 5: Выручка */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Выручка</h3>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6" />
                <span className="text-lg">Выручка по дате продажи</span>
              </div>
              <div className="text-2xl font-bold">{formatMoney(metrics.revenueFromAds)}</div>
              <div className="mt-2 text-sm opacity-80">
                Из сквозной аналитики по всем источникам лида и рекламным каналам, без сделок созданных самостоятельно менеджерами
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Repeat className="w-6 h-6" />
                <span className="text-lg">Выручка повторных от выручки по дате продажи</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.repeatedRevenue)}</div>
              <div className="mt-2 text-sm opacity-80">
                Из всех источников и каналов
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <LineChart className="w-6 h-6" />
                <span className="text-lg">Выручка всего в сделках, созданных 2024</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.totalRevenuePeriod)}</div>
              <div className="mt-2 text-sm opacity-80">
                В т.ч. сделки, созданные самостоятельно
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <PieChart className="w-6 h-6" />
                <span className="text-lg">Выручка по дате продажи</span>
              </div>
              <div className="text-3xl font-bold">{formatMoney(metrics.totalRevenueSold)}</div>
              <div className="mt-2 text-sm opacity-80">
                В т.ч. сделки, созданные самостоятельно
              </div>
            </Card>
          </div>
        </div>

        {/* Лучшие месяцы */}
        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="w-6 h-6" />
            <span className="text-lg">Лучшие месяцы по когортному анализу</span>
          </div>
          <div className="text-3xl font-bold">
            февраль, март, апрель
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SalesFunnel;
