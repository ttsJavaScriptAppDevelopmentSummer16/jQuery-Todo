$(function() {

  var addTaskBtn = $('#addTaskBtn');
  var removeLastTask = $('#removeTaskBtn');
  var userInput = $('#userInput');
  var taskList = $('#list');
  var error = $('.error');

  function addTask (e) {
    e.preventDefault();

    if (userInput.val() === ''){
       error.html('Please enter a task.').addClass('showError');;
    }else {
      var newTask = userInput.val();
      taskList.append('<li>' + newTask + '</li>');
      userInput.val('');
    }
  }

  function removeAllTasks (e) {
    e.preventDefault();

    if (taskList.children().length == 0){
      error.html('There are no tasks in the list.').addClass('showError');;
    }else {
   var allTasks = taskList.children();
    allTasks.addClass('strikeOut');

    setTimeout(function(){
        allTasks.remove();
      }, 900); 
    }
  }

  function removeButton (e){
    e.preventDefault();

    var currentTask = $(e.target);
    $(e.target).addClass('strikeOut');

    setTimeout(function(){
        currentTask.remove();
      }, 900); 
  }

  addTaskBtn.on('click', addTask);
  removeLastTask.on('click', removeAllTasks);
  taskList.on('click', removeButton);

});

