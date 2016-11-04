$(document).ready(function() {

    var toDo = [];

    function newTodo(description, isCompleted, id) {
        this.isComplete = isCompleted;
        this.description = description;
        this.id = id;
    };
    // get value of note from form when hitting enter
    $("form").submit(function(event) {
        event.preventDefault();
        var toAdd = $('input[name=ListItem]').val();
        console.log(toAdd);

        var id = Date.now();
        var addedTodo = new newTodo(toAdd, false, id);
        toDo.push(addedTodo);

        updateTodo(addedTodo);
        $("input").val("");
    });
    // update note
    function updateTodo(addedTodo) {
        $(".items").html("");

        toDo.forEach(function(todo) {
            if (todo.isComplete === false) {
                $('.items').append(`<li>
                    <article>
                        <button data-id="${todo.id}" class='check'></button>
                        <p>${todo.description}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${todo.id}" class='delete'>X</button>
                    </article>
                </li>`)
            } else {
                $('.items').append(`<li>
                    <article class='completed'>
                        <button data-id="${todo.id}" class='check'></button>
                        <p class='complete'>${todo.description}</p>
                        <input type='text' class='edit-todo' value='learn css'>
                        <button data-id="${todo.id}" class='delete'>X</button>
                    </article>
                </li>`)
            }
        });
    }

    // delete note
    $(document).on('click', '.delete', function() {
        var id = $(this).data("id");
        var index = null;

        toDo.forEach(function(todo, idx) {
            if (todo.id === id) {
                index = idx;
            }
        });
        toDo.splice(index, 1);
        updateTodo();
    });
    // add check mark and strikethrough to note
    $(document).on('click', '.check', function() {
        var id = $(this).data("id");

        toDo.forEach(function(todo, idx) {
            if (todo.id === id) {
                if (todo.isComplete) {
                    todo.isComplete = false;
                } else {
                    todo.isComplete = true;
                }
            }
        });
        updateTodo();
    });
    // show all notes
    $(document).on('click', '.show-all', function() {
        $('.items').html("");
        toDo.forEach(function(todo) {
            if (todo.isComplete === false) {
                updateTodo()
            }
        });
    });
    // show active notes
    $(document).on('click', '.show-active', function() {
        $('.items').html("");
        toDo.forEach(function(todo) {
            if (todo.isComplete === false) {
                $('.items').append(`<li>
                    <article>
                        <button data-id="${todo.id}" class='check'></button>
                        <p>${todo.description}</p>
                        <input type='text' class='edit-todo' value='learn html'>
                        <button data-id="${todo.id}" class='delete'>X</button>
                    </article>
                </li>`)
            }
        });
    });
    // show completed notes
    $(document).on('click', '.show-completed', function() {
        $('.items').html("");
        toDo.forEach(function(todo) {
            if (todo.isComplete === true) {
                $('.items').append(`<li>
                    <article class='completed'>
                        <button data-id="${todo.id}" class='check'></button>
                        <p class='complete'>${todo.description}</p>
                        <input type='text' class='edit-todo' value='learn css'>
                        <button data-id="${todo.id}" class='delete'>X</button>
                    </article>
                </li>`)
            }
        });
    });

});
