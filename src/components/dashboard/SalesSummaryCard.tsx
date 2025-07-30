import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { SalesSummaryData } from '@/data/dashboard-data';
import { ArrowUp, ArrowDown } from 'lucide-react';

export function SalesSummaryCard({ title, value, change, changeType, icon: Icon }: SalesSummaryData) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <span className={cn(
            "flex items-center gap-1",
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          )}>
            {changeType === 'increase' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {change}
          </span>
           vs last month
        </p>
      </CardContent>
    </Card>
  );
}
