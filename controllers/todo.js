(function() {
   angular
      .module('todo')
      .controller('TodoController', function TodoController(storetodos) {
         let vm = this;
         vm.counter = 0;
         vm.isCompleted = false;
         vm.isActive = false;
         vm.isAll = true;

         vm.submit = function(newTodo) {
            console.log(newTodo);
            vm.todos = storetodos.saveTodo(newTodo);
            $("input").val("");
            vm.remaining();
         }

         vm.remaining = function() {
            vm.counter = 0;
            vm.todos.forEach(function(todo) {
               if (todo.isComplete === false) {
                  vm.counter++;
               }
            })
         }

         vm.onclickDelete = function(id) {
            vm.todoDeleted = storetodos.deleteTodo(id);
            vm.remaining();
         }

         vm.onclickChecked = function(id) {
            vm.todoChecked = storetodos.markTodoComplete(id);
            vm.remaining();
         }

         vm.onClickShowAll = function() {
            vm.todos = storetodos.ShowAll();
            vm.isCompleted = false;
            vm.isActive = false;
            vm.isAll = true;
         }

         vm.onClickShowActive = function() {
            vm.todos = storetodos.ShowActive();
            vm.isCompleted = false;
            vm.isActive = true;
            vm.isAll = false;
         }

         vm.onClickShowCompleted = function() {
            vm.todos = storetodos.ShowCompleted();
            vm.isCompleted = true;
            vm.isActive = false;
            vm.isAll = false;
         }

         let returnedTodo = storetodos.getTodo();
         vm.todos = returnedTodo;
         vm.remaining();


      });
})();
