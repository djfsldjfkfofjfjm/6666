import React from 'react';
import { Card } from './ui/card';
import { TrendingUp, Briefcase, Users, Target, Repeat, DollarSign } from 'lucide-react';
import BackButton from './ui/back-button';

interface RegionMetrics {
  adBudget: number;
  qualifiedLeads: number;
  totalLeads: number;
  costPerLead: number;
  costPerLeadTotal: number;
  payroll: number;
  revenue: number;
  sales: number;
  repeatedSalesPercent: number;
  repeatedRevenuePercent: number;
}

interface Region {
  name: string;
  color: string;
  metrics: RegionMetrics;
}

const RegionalComparison = () => {
  const regions: Region[] = [
    {
      name: "РФ",
      color: "from-blue-500",
      metrics: {
        adBudget: 30541504,
        qualifiedLeads: 17864,
        totalLeads: 23524,
        costPerLead: 1709.67,
        costPerLeadTotal: 1974.86,
        payroll: 4737320,
        revenue: 220799611,
        sales: 2588,
        repeatedSalesPercent: 34.86,
        repeatedRevenuePercent: 22.27
      }
    },
    {
      name: "Казахстан",
      color: "from-green-500",
      metrics: {
        adBudget: 1612936,
        qualifiedLeads: 2887,
        totalLeads: 2887,
        costPerLead: 558.69,
        costPerLeadTotal: 913.92,
        payroll: 1025550,
        revenue: 6060457,
        sales: 64,
        repeatedSalesPercent: 0,
        repeatedRevenuePercent: 0
      }
    },
    {
      name: "ОАЭ",
      color: "from-purple-500",
      metrics: {
        adBudget: 2748415,
        qualifiedLeads: 3431,
        totalLeads: 3431,
        costPerLead: 801.05,
        costPerLeadTotal: 1055.88,
        payroll: 874300,
        revenue: 33426313,
        sales: 272,
        repeatedSalesPercent: 0,
        repeatedRevenuePercent: 0
      }
    }
  ];

  const formatMoney = (value: number): string => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(value);
  };

  const getWidth = (value: number, maxValue: number): string => {
    return `${(value / maxValue) * 100}%`;
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Региональная статистика 2024</h2>
        <p className="text-gray-500 text-center mb-8">Сравнительный анализ показателей по регионам</p>

        <div className="grid grid-cols-3 gap-8">
          {regions.map((region) => (
            <div key={region.name} className="space-y-6">
              <Card className="p-6 bg-white shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">{region.name}</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Рекламный бюджет</span>
                      </div>
                      <span className="font-bold">{formatMoney(region.metrics.adBudget)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Квал. лиды</span>
                      </div>
                      <span className="font-bold">{region.metrics.qualifiedLeads.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Все лиды</span>
                      </div>
                      <span className="font-bold">{region.metrics.totalLeads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Цена обращения</div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${region.color}`}
                          style={{width: getWidth(region.metrics.costPerLead, 3000)}}
                        />
                      </div>
                      <div className="text-right text-sm font-bold mt-1">
                        {formatMoney(region.metrics.costPerLead)}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Цена обращения (с ФОТ)</div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${region.color}`}
                          style={{width: getWidth(region.metrics.costPerLeadTotal, 3000)}}
                        />
                      </div>
                      <div className="text-right text-sm font-bold mt-1">
                        {formatMoney(region.metrics.costPerLeadTotal)}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">ФОТ</span>
                        <span className="font-bold">{formatMoney(region.metrics.payroll)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Выручка</span>
                        <span className="font-bold">{formatMoney(region.metrics.revenue)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Продажи</span>
                        <span className="font-bold">{region.metrics.sales}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">% повторных продаж</div>
                      <div className="text-xl font-bold">
                        {region.metrics.repeatedSalesPercent}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">% выручки повторных</div>
                      <div className="text-xl font-bold">
                        {region.metrics.repeatedRevenuePercent}%
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Лидер по конверсии</div>
            <div className="text-xl font-bold">
              {regions.reduce((a, b) => 
                (b.metrics.sales / b.metrics.totalLeads) > (a.metrics.sales / a.metrics.totalLeads) ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Самая низкая цена лида</div>
            <div className="text-xl font-bold">
              {regions.reduce((a, b) => 
                b.metrics.costPerLead < a.metrics.costPerLead ? b : a
              ).name}
            </div>
          </Card>
          <Card className="p-6 bg-gray-900 text-white">
            <div className="text-gray-400 mb-2">Максимальная выручка</div>
            <div className="text-xl font-bold">
              {regions.reduce((a, b) => 
                b.metrics.revenue > a.metrics.revenue ? b : a
              ).name}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegionalComparison;
