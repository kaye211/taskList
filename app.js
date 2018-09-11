//UI Variables
const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

//Load event listeners
loadEventListeners();

function loadEventListeners() {
	//Add task
	form.addEventListener('submit', addTask);
	//remove task
	taskList.addEventListener('click', removeTask);

	clearBtn.addEventListener('click', clearTask);

	filter.addEventListener('keyup', filterTask);
}
function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a task');
	}

	//Create list
	const li = document.createElement('li');
	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	// Html icon
	link.innerHTML = '<i class="fa fa-remove"></i>';
	li.appendChild(link);
	taskList.appendChild(li);
	taskInput.value = '';
	e.preventDefault();
}

//delete task
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Confirm deletion')) {
			e.target.parentElement.parentElement.remove();
		}
	}
}

//clear tasks
function clearTask(e) {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}
//Filter tasks
function filterTask(e) {
	const text = e.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').forEach(function(task) {
		const item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}
