export default {
	init () {
		data.todos = appsmith.store.todos || data.dummyTodos;
	},
	updateTodo( id, update){
		data.todos[id] = {...data.todos[id], ...update};
		storeValue('todos', data.todos);
	},
	addTodo( title){
		this.updateTodo(data.todos.length, {title:title, completed: false})
	},
	deleteTodo(id){
		data.todos.splice(id, 1);
		storeValue('todos', data.todos);
	},
	editTodo(id, title){
		this.updateTodo(id, {title});
		data.activeTodo = undefined;
	}
}