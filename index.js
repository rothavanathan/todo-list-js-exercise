// Arrays to keep track of each task's state



// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];


task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted(); // Clean Cat Litter has not been completed
task1.logTaskState(); // Clean Cat Litter has not been completed

console.log(tasks);
