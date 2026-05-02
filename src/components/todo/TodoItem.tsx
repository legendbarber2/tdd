'use client';

import { useState } from 'react';
import { Todo } from '@/lib/todoService';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Edit2, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleUpdate = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, editTitle);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex items-center gap-4 p-5 mb-4 rounded-2xl glass ambient-shadow hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex items-center justify-center">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="w-6 h-6 border-2 border-indigo-200 data-[state=checked]:bg-brand-indigo data-[state=checked]:border-brand-indigo transition-colors"
        />
      </div>

      <div className="flex-1">
        {isEditing ? (
          <div className="flex items-center gap-2">
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
              autoFocus
              className="h-10 py-1 px-3 rounded-lg border-indigo-100 bg-white/80"
            />
            <Button size="icon" variant="ghost" onClick={handleUpdate} className="h-9 w-9 text-green-600 hover:bg-green-50">
              <Check className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" onClick={handleCancel} className="h-9 w-9 text-red-600 hover:bg-red-50">
              <X className="h-5 w-5" />
            </Button>
          </div>
        ) : (
          <span className={`text-lg font-medium transition-all duration-300 ${todo.completed ? 'line-through text-slate-400' : 'text-on-surface'}`}>
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {!isEditing && (
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={() => setIsEditing(true)} 
            className="h-10 w-10 text-slate-400 hover:text-brand-indigo hover:bg-indigo-50 transition-colors"
          >
            <Edit2 className="h-5 w-5" />
          </Button>
        )}
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={() => onDelete(todo.id)} 
          className="h-10 w-10 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
};
