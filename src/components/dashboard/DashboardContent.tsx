import React from 'react';
import { salesSummaryData, metricsData, userPanelData, salesChartData } from '@/data/dashboard-data';
import { SalesSummaryCard } from './SalesSummaryCard';
import { MetricCard } from './MetricCard';
import { SalesChart } from './SalesChart';
import { UserPanelCard } from './UserPanelCard';
import { AnomalyExplainer } from './AnomalyExplainer';

export function DashboardContent() {
  const allData = { salesSummaryData, metricsData, userPanelData, salesChartData };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline">Dashboard</h2>
        <AnomalyExplainer performanceData={JSON.stringify(allData, null, 2)} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {salesSummaryData.map((data) => (
          <SalesSummaryCard key={data.title} {...data} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-5">
            <SalesChart data={salesChartData} />
        </div>
        <div className="lg:col-span-2">
            <UserPanelCard data={userPanelData} />
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold tracking-tight font-headline mb-4">Key Metrics</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metricsData.map((data) => (
                <MetricCard key={data.title} {...data} />
            ))}
        </div>
      </div>
    </div>
  );
}
