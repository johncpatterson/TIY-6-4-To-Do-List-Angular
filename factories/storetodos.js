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
               todos = returnThisTodo;
            } else
               var returnThisTodo = 'You have not created any notes yet';
               var todoCount = todos.length;
               // console.log(todoCount);
            return returnThisTodo;  
         }

         const deleteTodo = function(id) {
            var id = this.id;
            var index = null;

            todos.forEach(function(todo, idx) {
               if (todo.id === id) {
                  index = idx;
               }
            });
            var deletedTodo = todos.splice(index, 1);
            return deletedTodo;
         }

         const markTodoComplete = function(id) {
            var id = this.id;
            todos.forEach(function(todo, idx) {
               if (todo.id === id) {
                  if (todo.isComplete === true) {
                     todo.isComplete = false;
                  } else {
                     todo.isComplete = true;
                  }
               }

            });
            return todos;
         }

         return {
            saveTodo,
            getTodo,
            deleteTodo,
            markTodoComplete
         }
      });
})();
