'use client';

import { useTodos } from '@/hooks/useTodos';
import { TodoInput } from '@/components/todo/TodoInput';
import { TodoList } from '@/components/todo/TodoList';
import { motion } from 'framer-motion';
import { Edit3, CheckCircle2, Layout, Zap } from 'lucide-react';

export default function Home() {
  const { todos, isLoaded, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodos();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-brand-indigo"></div>
      </div>
    );
  }

  const completedCount = todos.filter(t => t.completed).length;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b border-white/20 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <div className="flex items-center gap-2">
            <Edit3 className="text-brand-indigo h-8 w-8" />
            <span className="text-2xl font-black tracking-tighter brand-gradient-text">
              TodoCraft
            </span>
          </div>
          <nav className="hidden md:flex gap-8 items-center font-medium text-slate-600">
            <a href="#" className="hover:text-brand-indigo transition-colors">Features</a>
            <a href="#" className="hover:text-brand-indigo transition-colors">Workspace</a>
            <a href="#" className="hover:text-brand-indigo transition-colors">Analytics</a>
            <button className="px-6 py-2 rounded-full brand-gradient text-white font-bold text-sm hover:opacity-90 transition-all shadow-md">
              Pro Upgrade
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 -z-10"></div>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-brand-indigo text-sm font-bold mb-8"
            >
              <Zap className="h-4 w-4" />
              스마트한 할 일 관리의 시작
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black text-on-surface mb-6 tracking-tight leading-tight">
              더 효율적으로<br/>
              <span className="brand-gradient-text">더 완벽하게</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
              TodoCraft와 함께 당신의 하루를 설계하세요. <br/>
              직관적인 인터페이스와 강력한 기능으로 생산성을 극대화합니다.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="max-w-3xl mx-auto px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Input and Stats Card */}
            <div className="glass p-8 rounded-[2rem] ambient-shadow mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              <div className="flex justify-between items-end mb-8 px-2">
                <div>
                  <h2 className="text-2xl font-bold text-on-surface">오늘의 업무</h2>
                  <p className="text-slate-500">생산적인 하루를 위해 할 일을 추가해보세요.</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-brand-indigo">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-3xl font-black">{completedCount}</span>
                    <span className="text-xl text-slate-300"> / {todos.length}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-10 h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full brand-gradient rounded-full"
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              <TodoInput onAdd={addTodo} />
            </div>

            {/* List Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 px-4">
                <Layout className="h-5 w-5 text-slate-400" />
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
                  Tasks List
                </h3>
              </div>
              <TodoList 
                todos={todos} 
                onToggle={toggleTodo} 
                onDelete={deleteTodo} 
                onUpdate={updateTodo} 
              />
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Edit3 className="text-brand-indigo h-6 w-6" />
            <span className="text-xl font-black tracking-tighter text-slate-900">TodoCraft</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 TodoCraft AI. Designed for ultimate productivity.
          </p>
          <div className="flex gap-6 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-brand-indigo transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-indigo transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-indigo transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
