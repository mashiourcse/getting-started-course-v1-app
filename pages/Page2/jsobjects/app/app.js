export default {
	init () {
		data.todos = data.dummyTodos;
	},
	updateTodo( id, update){
		data.todos[id] = {...data.todos[id], ...update}
	},
	addTodo( title){
		this.updateTodo(data.todos.length, {title:title, completed: false})
	},
	deleteTodo(id){
		data.todos.splice(id, 1);
	},
	editTodo(id, title){
		this.updateTodo(id, {title});
		data.activeTodo = undefined;
	}
}