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
            var index = null;

            todos.forEach(function(todo, idx) {
               if (todo.id === id) {
                  index = idx;
               }
            });
            var deletedTodo = todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
         }

         const markTodoComplete = function(id) {
            todos.forEach(function(todo, idx) {
               if (todo.id === id) {
                  if (todo.isComplete === true) {
                     todo.isComplete = false;
                  } else {
                     todo.isComplete = true;
                  }
               }

            });
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
         }

         const ShowAll = function() {
            var filterAll = todos;
            return filterAll;
         }

         const ShowActive = function() {
            var filterActive = todos.filter(function(item) {
               if (item.isComplete == false) {
                  return true;
               }
            })
            return filterActive;
         }

         const ShowCompleted = function() {
            var filterComplete = todos.filter(function(item) {
               if (item.isComplete == true) {
                  return true;
               }
            })
            return filterComplete;
         }

         const todoCount = function() {
            var HowManyTodos = todos.length;
            return HowManyTodos;
          }

         return {
            saveTodo,
            getTodo,
            deleteTodo,
            markTodoComplete,
            ShowAll,
            ShowActive,
            ShowCompleted,
            todoCount
         }
      });
})();
