// Function to add a new item to the list
function addItem() {
  // Get the value from the text box
  var newItemText = document.getElementById('newItem').value;
  
  // If the input is not empty
  if (newItemText.trim() !== '') {
    // Create a new list item element
    var newEl = document.createElement('li');
    
    // Create a text node with the input value
    var newText = document.createTextNode(newItemText);
    
    // Attach the text node to the new list item
    newEl.appendChild(newText);
    
    // Find the position where the new element should be added (ul element)
    var position = document.getElementById('todo');
    
    // Insert the new list item into its position
    position.appendChild(newEl);
    
    // Clear the input box after adding the item
    document.getElementById('newItem').value = '';
  } else {
    // If the input is empty, display an alert
    alert('Please enter a valid item.');
  }
}
