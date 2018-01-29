var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){

  if(input === "list"){
    listTodo();
  }
  else if(input === "new"){
    newTodo();
  }
  else if(input === "delete"){
    rmTodo();
  }
  var input = prompt("What would you like to do?");
}
console.log("Ok, You quit the APP!")

fuction listTodo(){
  console.log("**********");
  todos.forEach(function(todo){
    console.log(i + " :" + todo);
  });
    console.log("**********");
}

function newTodo(){
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log("Added todo")
}

function rmTodo(){
  var index = prompt("Enter index of todo to delete");
  todos.splice(index,1);
  console.log("Deleted todo");
}
