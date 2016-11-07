(function() {
   angular
      .module('todo')
      .controller('TodoController', function TodoController(storetodos) {
         let vm = this;

         vm.submit = function(newTodo) {
            console.log(newTodo);
            vm.todos = storetodos.saveTodo(newTodo);
            $("input").val("");
         }

         vm.onclickDelete = function(id) {
            vm.todoDeleted = storetodos.deleteTodo(id);
         }

         vm.onclickChecked = function(id) {
            vm.todoChecked = storetodos.markTodoComplete(id);
         }

         vm.onClickShowAll = function() {
            vm.todos = storetodos.ShowAll();
         }

         vm.onClickShowActive = function() {
            vm.todos = storetodos.ShowActive();
         }

         vm.onClickShowCompleted = function() {
            vm.todos = storetodos.ShowCompleted();
         }

         let returnedTodo = storetodos.getTodo();
         vm.todos = returnedTodo;
         vm.todoCount = storetodos.todoCount();


      });
})();
