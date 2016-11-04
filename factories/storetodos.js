(function() {
    angular
        .module('todo')
        .factory('storetodos', function() {
            var todos = [];

            function newTodo(description, isCompleted, id) {
                this.isComplete = isCompleted;
                this.description = description;
                this.id = id;
            };

            const saveTodo = function(todo) {

                var id = Date.now();
                var addedTodo = new newTodo(todo, false, id);
                todos.push(addedTodo);
                localStorage.setItem('todos', JSON.stringify(todos));
                console.log(todos);
                return todos;
            }

            const getTodo = function() {
                if (localStorage.getItem('todos')) {
                var returnThisTodo = (JSON.parse(localStorage.getItem('todos')));
                } else 
                var returnThisTodo = 'You have not created any notes yet';
                return returnThisTodo;
            }

            const deleteTodo = function(id) {
                var deletedTodo = todos.pop(addedTodo);                
                return deletedTodo;
            }

            return {
                saveTodo,
                getTodo,
                deleteTodo
            }
        });
})();
