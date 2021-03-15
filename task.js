// TASK MANAGER
const start = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

// For displaying tasks for the user
let taskList = "";

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Starts and shows the task manager
let selection = prompt(start).toUpperCase();

// Everything is nested inside of close to stop everything from running after using "CLOSE"
while (selection !== "CLOSE") {
  // Checks if user entered "TASKS" (Uppercase or lowercase)
  if (selection === "TASKS") {
    // Concatenates each task (AKA item) in the tasks array to the taskList string variable
    for (task of tasks) {
      // Using \n to create a new line (AKA Line Break) after each task
      taskList += `${task}\n`;
    }
    // Displays the current tasks to the user
    alert(taskList);
    // Sets the value of the taskList string variable back to an empty string
    taskList = "";

  } else if (selection === "NEW") {
    // Prompts the user to enter a new task and stores their response
    newTask = prompt(`Please enter the new task:`);
    // Loops that continues looping until user enters something
    while (true) {
      // Checks if the user entered nothing
      if (newTask === "") {
        // Prompts the user again to enter a new task
        newTask = prompt(`Please enter the new task:`);
      } else {
        // Breaks out of the loop since the user entering something
        break;
      }
    }

    alert(`"${newTask}" has been added!`);
    // Adds the user's entry as a new item a the end of the tasks array
    tasks.push(newTask);
    // Checks if the user entered "REMOVE" (Uppercase or lowercase)
  } else if (selection === "REMOVE") {
    // Loop that continues looping until user enters a valid number
    while (true) {
      // Concatenates each task/item in the tasks array to the taskList string variable. Also, sets a number for each task.
      for (i = 0; i < tasks.length; i++) {
        // Using \n to create a new line. Also, adding 1 to i (AKA The index) so the numbers will start displaying at 1.
        taskList += `${i + 1}: ${tasks[i]}\n`;
      }
      // Prompts the user to enter a number and stores their response. Also, using \n to create a new line. Finally, subtracting 1 from the user's entry so it matches the index in the tasks array. (NOTE: JavaScript will attempt to convert a string into a number when you try to subtract from it. Just like ParseInt. So ParseInt is not actually necessary here.)
      num = parseInt(prompt(`Please enter a number to remove:\n${taskList}`)) - 1;
      // num = prompt(`Please enter a number to remove:\n${taskList}`) - 1;

      // Verifies the user entered a number within the index/number range
      if (num >= 0 && num < tasks.length){
      // Removes the selected task/item and sets that task/value to the removed variable
      removed = tasks.splice(num, 1);
      // Alerts user with the task/item that has been removed (NOTE: Using index on the "removed" variable because splice returns what is removed in an array)
      alert(`"${removed[0]}" has been removed`);
      // Sets the value of the taskList string variable back to an empty string
      taskList = "";
      // Breaks out of the loop since the user entered a valid index/number
      break;
      } else {
        // Alerts the user that they have not entered a valid number
        alert(`Not a valid entry`);
        // Sets the value of the taskList string variable back to an empty string
        taskList = "";
      }
    }
  }
  // Displays the start again. Also, converting value to UPPERCASE.
  selection = prompt(start).toUpperCase();
}
alert(`Thank you for using Task Manager!`);