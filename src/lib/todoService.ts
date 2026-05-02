export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export class TodoService {
  private todos: Todo[] = [];

  constructor(initialTodos: Todo[] = []) {
    this.todos = initialTodos.map(todo => ({
      ...todo,
      createdAt: new Date(todo.createdAt)
    }));
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
  }

  addTodo(title: string): Todo {
    if (!title || title.trim() === '') {
      throw new Error('제목은 비어있을 수 없습니다');
    }
    const newTodo: Todo = {
      id: this.generateId(),
      title: title.trim(),
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
    return { ...newTodo };
  }

  getTodos(): Todo[] {
    // 내부 상태를 보호하기 위해 복사본 반환
    return this.todos.map(todo => ({ ...todo }));
  }

  toggleTodo(id: string): Todo {
    const todoIndex = this.todos.findIndex(t => t.id === id);
    if (todoIndex === -1) {
      throw new Error('해당 ID의 할 일을 찾을 수 없습니다');
    }
    
    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      completed: !this.todos[todoIndex].completed
    };
    
    return { ...this.todos[todoIndex] };
  }

  deleteTodo(id: string): void {
    const todoIndex = this.todos.findIndex(t => t.id === id);
    if (todoIndex === -1) {
      throw new Error('해당 ID의 할 일을 찾을 수 없습니다');
    }
    this.todos.splice(todoIndex, 1);
  }

  updateTodo(id: string, newTitle: string): Todo {
    if (!newTitle || newTitle.trim() === '') {
      throw new Error('제목은 비어있을 수 없습니다');
    }
    
    const todoIndex = this.todos.findIndex(t => t.id === id);
    if (todoIndex === -1) {
      throw new Error('해당 ID의 할 일을 찾을 수 없습니다');
    }
    
    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      title: newTitle.trim()
    };
    
    return { ...this.todos[todoIndex] };
  }
}
