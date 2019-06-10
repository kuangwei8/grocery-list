$(document).ready(function() {
  $("form").submit(function(event) {
    var items = ["input1", "input2","input3"];
    var shoppingList =[];

    items.map(function(item) {

      var userInput = $("input#"+ item).val();
      shoppingList.push(userInput.toUpperCase());
      });

      shoppingList.sort();

      shoppingList.forEach(function(list){
          $("#list1").append("<li>" + list + "</li>");
      });
      $("form").hide();

      event.preventDefault();

  });
});
