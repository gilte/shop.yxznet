import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlusCircle } from 'lucide-react';

type UserPanelProps = {
    data: {
        name: string;
        company: string;
        avatar: string;
        value: string;
        details: { label: string; value: string }[];
    }
};

export function UserPanelCard({ data }: UserPanelProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
            <AvatarImage src={data.avatar} alt={`@${data.name}`} />
            <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
            <CardTitle className="font-headline">{data.company}</CardTitle>
            <p className="text-sm text-muted-foreground">Bem-vinda de volta, {data.name}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <Separator />
        <div className="my-4 text-center">
            <p className="text-sm text-muted-foreground">Saldo da Conta</p>
            <p className="text-3xl font-bold">{data.value}</p>
        </div>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo usuário
        </Button>
        <div className="mt-4 space-y-2 flex-grow">
            {data.details.map((item) => (
                <div key={item.label} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
