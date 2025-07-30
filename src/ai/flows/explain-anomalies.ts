'use server';

/**
 * @fileOverview A flow to analyze dashboard performance data and provide explanations of anomalies.
 *
 * - explainAnomalies - A function that analyzes performance data and explains anomalies.
 * - ExplainAnomaliesInput - The input type for the explainAnomalies function.
 * - ExplainAnomaliesOutput - The return type for the explainAnomalies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainAnomaliesInputSchema = z.object({
  performanceData: z.string().describe('Recent dashboard performance data in JSON format.'),
});
export type ExplainAnomaliesInput = z.infer<typeof ExplainAnomaliesInputSchema>;

const ExplainAnomaliesOutputSchema = z.object({
  explanation: z.string().describe('Explanation of anomalies in the performance data.'),
});
export type ExplainAnomaliesOutput = z.infer<typeof ExplainAnomaliesOutputSchema>;

export async function explainAnomalies(input: ExplainAnomaliesInput): Promise<ExplainAnomaliesOutput> {
  return explainAnomaliesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainAnomaliesPrompt',
  input: {schema: ExplainAnomaliesInputSchema},
  output: {schema: ExplainAnomaliesOutputSchema},
  prompt: `Analyze the following dashboard performance data and provide a brief explanation of any significant anomalies, such as large MRR values or Churn Rates. If there are no significant anomalies, state that there are none.

Data: {{{performanceData}}}
`,
});

const explainAnomaliesFlow = ai.defineFlow(
  {
    name: 'explainAnomaliesFlow',
    inputSchema: ExplainAnomaliesInputSchema,
    outputSchema: ExplainAnomaliesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
