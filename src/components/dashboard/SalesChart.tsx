"use client";

import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type SalesChartProps = {
  data: { name: string; sales: number; expenses: number }[];
};

export function SalesChart({ data }: SalesChartProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>A look at sales and expenses over the last months.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `R$${value/1000}k`}/>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
              />
              <Legend wrapperStyle={{fontSize: "14px"}}/>
              <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="expenses" stroke="hsl(var(--accent))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
