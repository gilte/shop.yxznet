
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PlusCircle, Pencil } from 'lucide-react';
import { userPanelData } from '@/data/dashboard-data';
import { useToast } from '@/hooks/use-toast';

type User = {
    name: string;
    email: string;
    avatarUrl?: string;
};

export function UserPanelCard() {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('kiwiboard-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleEditAvatar = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'image/png') {
        toast({
            variant: 'destructive',
            title: 'Formato inválido',
            description: 'Por favor, selecione um arquivo no formato PNG.',
        });
        return;
    }
    
    // Lógica de Upload (a ser implementada com o backend)
    // 1. Crie um FormData
    // const formData = new FormData();
    // formData.append('avatar', file);
    //
    // 2. Envie para a API
    // try {
    //   const response = await fetch('SUA_URL_DE_UPLOAD_AQUI', {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //       'Authorization': `Bearer ${localStorage.getItem('kiwiboard-token')}`
    //     }
    //   });
    //   const updatedUser = await response.json();
    //   
    //   // 3. Atualize o localStorage e o estado
    //   localStorage.setItem('kiwiboard-user', JSON.stringify(updatedUser.data));
    //   setUser(updatedUser.data);
    //
    //   toast({ title: 'Sucesso!', description: 'Sua foto de perfil foi atualizada.' });
    //
    // } catch (error) {
    //   toast({ variant: 'destructive', title: 'Erro', description: 'Não foi possível atualizar a foto.' });
    // }

    toast({
        title: 'Upload iniciado (simulação)',
        description: `O arquivo ${file.name} foi selecionado. Conecte a sua API de upload.`,
    });
  };

  const displayName = user?.name ?? 'Usuário';
  const displayCompany = user?.email.split('@')[1] ?? 'kiwienterprises.com';
  const displayAvatarFallback = displayName.charAt(0).toUpperCase();
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="relative">
            <Avatar className="h-12 w-12">
                <AvatarImage src={user?.avatarUrl} alt={displayName} />
                <AvatarFallback>{displayAvatarFallback}</AvatarFallback>
            </Avatar>
            <Button 
                variant="outline" 
                size="icon" 
                className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-background"
                onClick={handleEditAvatar}
            >
                <Pencil className="h-3 w-3" />
                <span className="sr-only">Editar foto do perfil</span>
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png"
            />
        </div>
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
