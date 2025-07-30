"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Wand2, AlertTriangle } from 'lucide-react';
import { explainAnomalies } from '@/ai/flows/explain-anomalies';
import { Skeleton } from '../ui/skeleton';

type AnomalyExplainerProps = {
  performanceData: string;
};

export function AnomalyExplainer({ performanceData }: AnomalyExplainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleExplain = async () => {
    setIsOpen(true);
    setIsLoading(true);
    setError(null);
    setExplanation(null);

    try {
      const result = await explainAnomalies({ performanceData });
      setExplanation(result.explanation);
    } catch (e) {
      setError('An error occurred while analyzing the data. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleExplain} variant="outline">
        <Wand2 className="mr-2 h-4 w-4" />
        Explain Anomalies
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wand2 className="h-5 w-5 text-primary" />
              AI-Powered Anomaly Report
            </DialogTitle>
            <DialogDescription>
              An analysis of recent performance data to highlight significant changes.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {explanation && (
              <p className="text-sm text-foreground leading-relaxed">{explanation}</p>
            )}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsOpen(false)} variant="secondary">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
