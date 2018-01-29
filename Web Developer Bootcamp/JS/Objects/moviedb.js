var db = [
    { title = "Blade Runner 2049",
      rating = 5,
      hasWatched = true
    }
    { title = "Harry Potter: The Phoenix Order",
      rating = 5,
      hasWatched = true
    }
    { title = "Whiplash",
      rating = 5,
      hasWatched = false
    }
    { title = "Spiderman: Homecomings",
      rating = 5,
      hasWatched = true
    }
]

function buildString(db){
  var result = "You have "
  if(db.hasWatched){
    result += "watched ";
  }
  else{
    result += "not seen ";
  }
  result += "\"" + db.title + "\" - ";
  result += db.rating + " stars";
  return result;
}

db.foreach(function(db){
  console.log(buildString(db));
});
