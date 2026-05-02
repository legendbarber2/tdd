'use client';

import { Todo } from '@/lib/todoService';
import { TodoItem } from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete, onUpdate }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20 px-8 glass rounded-3xl border-dashed border-2 border-indigo-100 flex flex-col items-center justify-center gap-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-brand-indigo mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </div>
        <p className="text-xl font-bold text-on-surface">할 일이 없습니다</p>
        <p className="text-slate-500">새로운 할 일을 추가하여 오늘 하루를 관리해보세요.</p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-2">
      <AnimatePresence mode="popLayout">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
