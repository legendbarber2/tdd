'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface TodoInputProps {
  onAdd: (title: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-10">
      <Input
        placeholder="할 일을 입력하세요..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 h-14 text-lg rounded-full border-white/30 bg-white/50 backdrop-blur-md shadow-sm focus:ring-2 focus:ring-brand-indigo/50 transition-all px-6"
      />
      <Button 
        type="submit" 
        className="h-14 px-8 rounded-full brand-gradient text-white font-bold text-lg shadow-lg shadow-indigo-200 hover:scale-[1.02] transition-transform active:scale-95"
      >
        <Plus className="mr-2 h-5 w-5" />
        추가
      </Button>
    </form>
  );
};
