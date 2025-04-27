
import { db, collection, addDoc, onSnapshot, deleteDoc, doc } from "../config.js";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Add Task Function to Firestore
async function addTask(task) {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      task: task,
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Delete Task Function
async function deleteTask(taskId) {
  try {
    await deleteDoc(doc(db, "todos", taskId));
    console.log("Task deleted: ", taskId);
  } catch (e) {
    console.error("Error deleting task: ", e);
  }
}

// Render Tasks Function with Real-Time Updates
function renderTasks() {
  todoList.innerHTML = ""; 

  // Using onSnapshot to listen for real-time updates
  onSnapshot(collection(db, "todos"), (snapshot) => {
    snapshot.docChanges().forEach(change => {
      if (change.type === "added") {
        const taskData = change.doc.data();
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.setAttribute("data-id", change.doc.id);  
        li.innerHTML = `
          <span>${taskData.task}</span>
          <div>
            <button class="delete-btn">Delete</button>
          </div>
        `;
        todoList.appendChild(li);
      }

      if (change.type === "removed") {
        const taskId = change.doc.id;
        const taskElement = document.querySelector(`[data-id=${taskId}] `);
        if (taskElement) {
          taskElement.remove(); 
        }
      }
    });

    // Adding event listeners to delete buttons dynamically
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(button => {
      button.removeEventListener('click', handleDelete); 
      button.addEventListener('click', handleDelete);  
    });
  });
}

// Handle delete button click
function handleDelete(e) {
  const taskId = e.target.closest('li').getAttribute('data-id'); 
  deleteTask(taskId);
}

// Button to Add Task
addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    addTask(task);
    taskInput.value = ''; 
  } else {
    alert("Please enter a task.");
  }
});

// Initial Render of Tasks
renderTasks();





















