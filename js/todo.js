$(document).ready(function(){
	var newTask = $('#tarea');
	var API_URL = 'http://localhost:8000/api/';
	var taskContainer = $('.todo-container');
	var task = [];


	var drawTask = function(){
		taskContainer.empty();
		var contentToAdd = '';

		if(task.length === 0){
			taskContainer.append('<li class="todo-items">No hay tareas pendientes</li>')
		}

		for(var i = 0; i < task.length; i++){
			contentToAdd+='<li class="todo-items">' + task[i].name + '<button class="remove-item" data-type-id="'+ task[i].id + '"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></li>';
		}

		taskContainer.append(contentToAdd);
	}

	var createNewTask = function(name){

		var data = {
			'name': name
		}

		$.ajax({
			type: 'POST',
			url: API_URL +'task',
			data: data
		})
			.done(function(data){
				$('#tarea').val("");
				task.push(data);
				drawTask();

			})
	}

	var getTask = function(data){

		$.ajax({
			type: 'GET',
			url: API_URL +'task',
			data: data
		})
			.done(function(data){
				task = data;
				drawTask();

		})
	}

	var removeTask = function(id){
		$.ajax({
			type: 'DELETE',
			url: API_URL +'task/' + id
		})
			.done(function(data){
				task = $.grep(task, function(item){
					return item.id != id;
				});
				drawTask();
		})
	}


	$('.add-task').on('click', function(event){
		if(newTask.val() != ''){
			event.preventDefault();
			createNewTask(newTask.val());
			console.log(newTask.val());
		}
	});

	$(document).on('click', '.remove-item', function(){
		var id = $(this).data('typeId');
		removeTask(id);
	})

	getTask();


})
