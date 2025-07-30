
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlusCircle } from 'lucide-react';
import { userPanelData } from '@/data/dashboard-data'; // para dados estáticos

type User = {
    name: string;
    email: string;
};

export function UserPanelCard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('kiwiboard-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const displayName = user?.name ?? 'Usuário';
  const displayCompany = user?.email.split('@')[1] ?? 'kiwienterprises.com';
  const displayAvatarFallback = displayName.charAt(0).toUpperCase();
  const avatarUrl = user ? `https://i.pravatar.cc/150?u=${user.email}` : userPanelData.avatar;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
            <AvatarImage src={avatarUrl} alt={displayName} />
            <AvatarFallback>{displayAvatarFallback}</AvatarFallback>
        </Avatar>
        <div>
            <CardTitle className="font-headline">{displayCompany}</CardTitle>
            <p className="text-sm text-muted-foreground">Bem-vindo(a) de volta, {displayName.split(' ')[0]}</p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <Separator />
        <div className="my-4 text-center">
            <p className="text-sm text-muted-foreground">Saldo da Conta</p>
            <p className="text-3xl font-bold">{userPanelData.value}</p>
        </div>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo usuário
        </Button>
        <div className="mt-4 space-y-2 flex-grow">
            {userPanelData.details.map((item) => (
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
