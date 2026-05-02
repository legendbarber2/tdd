import { TodoService } from './todoService';

describe('TodoService', () => {
  let todoService: TodoService;

  beforeEach(() => {
    todoService = new TodoService();
  });

  describe('addTodo (새 할일 추가)', () => {
    it('정상적으로 새로운 할 일이 추가되어야 한다', () => {
      const todo = todoService.addTodo('공부하기');
      expect(todo.title).toBe('공부하기');
      expect(todo.completed).toBe(false);
      expect(todo.id).toBeDefined();
      expect(todo.createdAt).toBeInstanceOf(Date);
      
      const todos = todoService.getTodos();
      expect(todos).toHaveLength(1);
      expect(todos[0].title).toBe('공부하기');
    });

    it('제목이 비어있을 때 에러를 발생시켜야 한다', () => {
      expect(() => {
        todoService.addTodo('');
      }).toThrow('제목은 비어있을 수 없습니다');
    });

    it('제목이 공백으로만 이루어져 있을 때 에러를 발생시켜야 한다', () => {
      expect(() => {
        todoService.addTodo('   ');
      }).toThrow('제목은 비어있을 수 없습니다');
    });
  });

  describe('getTodos (전체 목록 조회)', () => {
    it('초기 상태에서는 빈 배열을 반환해야 한다', () => {
      const todos = todoService.getTodos();
      expect(todos).toEqual([]);
      expect(todos).toHaveLength(0);
    });

    it('할 일이 추가된 후 정확한 목록과 개수를 반환해야 한다', () => {
      todoService.addTodo('할일 1');
      todoService.addTodo('할일 2');
      const todos = todoService.getTodos();
      expect(todos).toHaveLength(2);
      expect(todos[0].title).toBe('할일 1');
      expect(todos[1].title).toBe('할일 2');
    });

    it('외부에서 반환된 배열을 수정해도 원본 데이터가 변경되지 않아야 한다', () => {
      todoService.addTodo('할일 1');
      const todos = todoService.getTodos();
      todos[0].title = '해킹 시도';
      
      const checkTodos = todoService.getTodos();
      expect(checkTodos[0].title).toBe('할일 1');
    });
  });

  describe('toggleTodo (완료 상태 토글)', () => {
    it('특정 할 일의 완료 상태가 정상적으로 변경되어야 한다', () => {
      const todo = todoService.addTodo('할일');
      expect(todo.completed).toBe(false);
      
      const toggled = todoService.toggleTodo(todo.id);
      expect(toggled.completed).toBe(true);
      
      const todos = todoService.getTodos();
      expect(todos[0].completed).toBe(true);
    });

    it('완료 상태를 여러 번 토글했을 때 올바르게 상태가 전환되어야 한다', () => {
      const todo = todoService.addTodo('할일');
      
      todoService.toggleTodo(todo.id); // true
      const toggledTwice = todoService.toggleTodo(todo.id); // false
      expect(toggledTwice.completed).toBe(false);
    });

    it('존재하지 않는 ID로 토글 시도 시 에러를 발생시켜야 한다', () => {
      expect(() => {
        todoService.toggleTodo('invalid-id');
      }).toThrow('해당 ID의 할 일을 찾을 수 없습니다');
    });
  });

  describe('deleteTodo (할 일 삭제)', () => {
    it('특정 할 일이 정상적으로 삭제되어야 한다', () => {
      const todo = todoService.addTodo('할일 삭제 테스트');
      todoService.deleteTodo(todo.id);
      
      const todos = todoService.getTodos();
      expect(todos).toHaveLength(0);
    });

    it('여러 개 중 하나를 삭제해도 다른 할 일에 영향을 주지 않아야 한다', () => {
      const todo1 = todoService.addTodo('할일 1');
      const todo2 = todoService.addTodo('할일 2');
      const todo3 = todoService.addTodo('할일 3');
      
      todoService.deleteTodo(todo2.id);
      
      const todos = todoService.getTodos();
      expect(todos).toHaveLength(2);
      expect(todos.map(t => t.id)).not.toContain(todo2.id);
      expect(todos.map(t => t.id)).toEqual(expect.arrayContaining([todo1.id, todo3.id]));
    });

    it('존재하지 않는 ID 삭제 시도 시 에러를 발생시켜야 한다', () => {
      expect(() => {
        todoService.deleteTodo('invalid-id');
      }).toThrow('해당 ID의 할 일을 찾을 수 없습니다');
    });
  });

  describe('updateTodo (할 일 수정)', () => {
    it('특정 할 일의 제목이 정상적으로 수정되어야 한다', () => {
      const todo = todoService.addTodo('수정 전 할일');
      const updated = todoService.updateTodo(todo.id, '수정 후 할일');
      
      expect(updated.title).toBe('수정 후 할일');
      
      const todos = todoService.getTodos();
      expect(todos[0].title).toBe('수정 후 할일');
    });

    it('존재하지 않는 ID 수정 시도 시 에러를 발생시켜야 한다', () => {
      expect(() => {
        todoService.updateTodo('invalid-id', '새 제목');
      }).toThrow('해당 ID의 할 일을 찾을 수 없습니다');
    });

    it('수정할 제목이 빈 문자열일 때 에러를 발생시켜야 한다', () => {
      const todo = todoService.addTodo('정상 제목');
      expect(() => {
        todoService.updateTodo(todo.id, '   ');
      }).toThrow('제목은 비어있을 수 없습니다');
    });
  });
});
