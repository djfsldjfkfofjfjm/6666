import React from 'react';
import BackButton from './ui/back-button';
import { Card } from './ui/card';
import { Users, Repeat, TrendingUp, Filter } from 'lucide-react';

interface Metrics {
  totalLeads: number;
  qualifiedLeads: number;
  sales: number;
  repeatedSales: number;
  repeatedSalesPercent: number;
  revenue: number;
  revenueByPaymentDate: number;
  averageCheck: number;
  junkLeads: number;
  repeatedLeadsPercent: number;
  repeatedLeads: number;
  conversionRate: number;
}

const WhatsAppFunnel = () => {
  const metrics: Metrics = {
    totalLeads: 3620,
    qualifiedLeads: 1148,
    sales: 543,
    repeatedSales: 114,
    repeatedSalesPercent: 20.99,
    revenue: 31080304,
    revenueByPaymentDate: 41239849,
    averageCheck: 57238,
    junkLeads: 50,
    repeatedLeadsPercent: 4.75,
    repeatedLeads: 172,
    conversionRate: 47.30
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
        <h2 className="text-3xl font-bold text-center mb-2">Анализ воронки WhatsApp</h2>
        <p className="text-gray-500 text-center mb-12">Комплексный обзор показателей эффективности</p>

        <div className="grid grid-cols-12 gap-8">
          {/* Основная воронка */}
          <div className="col-span-8">
            <Card className="p-8 bg-white relative overflow-hidden">
              {/* Фоновая воронка */}
              <div className="absolute inset-0 opacity-5">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,0 L100,0 L85,100 L15,100 Z" className="fill-current text-green-500" />
                </svg>
              </div>

              <div className="relative space-y-8">
                {/* Этап 1: Все заявки */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Все заявки</div>
                      <div className="text-2xl font-bold">{metrics.totalLeads.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-green-600">100%</div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-green-500 to-green-600" />

                {/* Этап 2: Квалифицированные лиды */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <Filter className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Квалифицированные лиды</div>
                      <div className="text-2xl font-bold">{metrics.qualifiedLeads.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-emerald-600">{metrics.conversionRate}%</div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-emerald-500 to-emerald-600" />

                {/* Этап 3: Продажи */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Продажи</div>
                      <div className="text-2xl font-bold">{metrics.sales.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-teal-600">
                    {((metrics.sales / metrics.totalLeads) * 100).toFixed(1)}%
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-teal-500 to-teal-600" />

                {/* Этап 4: Повторные продажи */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <Repeat className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Повторные продажи</div>
                      <div className="text-2xl font-bold">{metrics.repeatedSales.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-cyan-600">{metrics.repeatedSalesPercent}%</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Боковые метрики */}
          <div className="col-span-4 space-y-6">
            {/* Финансовые показатели */}
            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <h3 className="text-lg mb-4">Финансовые показатели</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Выручка</span>
                  <span className="font-bold">{formatMoney(metrics.revenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Выручка по оплате</span>
                  <span className="font-bold">{formatMoney(metrics.revenueByPaymentDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Средний чек</span>
                  <span className="font-bold">{formatMoney(metrics.averageCheck)}</span>
                </div>
              </div>
            </Card>

            {/* Качественные метрики */}
            <Card className="p-6 bg-white">
              <h3 className="text-lg mb-4 text-gray-800">Качество лидов</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Мусорные лиды</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{metrics.junkLeads}</span>
                    <span className="text-sm text-gray-500">
                      ({((metrics.junkLeads / metrics.totalLeads) * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Повторные заявки</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold">{metrics.repeatedLeads}</span>
                    <span className="text-sm text-gray-500">({metrics.repeatedLeadsPercent}%)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ключевые индикаторы */}
            <Card className="p-6 bg-gray-900 text-white">
              <h3 className="text-lg mb-4">Ключевые индикаторы</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Конверсия в продажи</span>
                  <span className="text-2xl font-bold">
                    {((metrics.sales / metrics.totalLeads) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Эффективность квалификации</span>
                  <span className="text-2xl font-bold">{metrics.conversionRate}%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFunnel;
