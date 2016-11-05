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
            console.log(id)
            vm.todoDeleted = storetodos.deleteTodo(id);
         }

         vm.onclickChecked = function(id) {
            vm.todoChecked = storetodos.markTodoComplete(id);
         }

         let returnedTodo = storetodos.getTodo();
         vm.todos = returnedTodo;

      });
})();
