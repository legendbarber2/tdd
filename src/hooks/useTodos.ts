'use client';

import { useState, useEffect, useCallback } from 'react';
import { Todo, TodoService } from '@/lib/todoService';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 로컬 스토리지에서 초기 데이터 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTodos(parsed.map((t: any) => ({ ...t, createdAt: new Date(t.createdAt) })));
      } catch (e) {
        console.error('Failed to load todos', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // 데이터가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = useCallback((title: string) => {
    const service = new TodoService(todos);
    const newTodo = service.addTodo(title);
    setTodos(service.getTodos());
    return newTodo;
  }, [todos]);

  const toggleTodo = useCallback((id: string) => {
    const service = new TodoService(todos);
    service.toggleTodo(id);
    setTodos(service.getTodos());
  }, [todos]);

  const deleteTodo = useCallback((id: string) => {
    const service = new TodoService(todos);
    service.deleteTodo(id);
    setTodos(service.getTodos());
  }, [todos]);

  const updateTodo = useCallback((id: string, title: string) => {
    const service = new TodoService(todos);
    service.updateTodo(id, title);
    setTodos(service.getTodos());
  }, [todos]);

  return {
    todos,
    isLoaded,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo
  };
};
