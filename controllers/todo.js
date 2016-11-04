(function() {
    angular
        .module('todo')
        .controller('TodoController', function TodoController(storetodos) {
            let vm = this;

            vm.submit = function(newTodo) {
                console.log(newTodo);
                vm.todos = storetodos.saveTodo(newTodo);
            }

            vm.onclick = function(id) {
                vm.todoDeleted = storetodos.deleteTodo(id);
            }
            
        });
})();
