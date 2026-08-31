// ============================
// INSTRUCTIONS
// ============================
//
// Complete each TODO in order starting from TODO 1. 
// Follow the instructions for each TODO to complete the app.

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    // TODO 6: render initial users using displayUsers()

    // TODO 13: Add submit event listener to #userForm

    // TODO: 21: Add click event listener to the <ul> element that contains the user list
    // Use event delegation to handle delete button clicks
    
}


function displayUsers() {
    // TODO 1: Get all users, and clear existing list in #userList
    // Hint: set innerHTML of #userList to an empty string
    // Hint: use api.getUsers() to get the list of users
    
	
    // TODO 2: Call displayUserItem for each user in the list of users
    // Hint: Use a for...of loop
    
}

function displayUserItem(user) {
    // TODO 3: Create an <li> element
    
    // TODO 4: Insert name and age (seperated by a dash) as text into <li> and 
    // set data-id attribute to the user's id
    // Hint: use setAttribute("data-id", user.id) to set the data-id attribute
    
    // TODO 5: Append <li> to the #userList
    
    // TODO 14: Create a button element
    
    // TODO 15: Set the text content of the button to "Delete"
    
    // TODO 16: Append the button to the <li>
    
}

function handleFormSubmit(event) {
    // TODO 7: Prevent default
    
    // TODO 8: Create a FormData object from the form
    
    // TODO 9: Create a new user object with the name and age
    
    // TODO 10: pass the new user object to api.createUser()
    
    // TODO 11: display users using displayUsers()
    
    // TODO 12: clear the form (use event.target.reset())
    
}


function handleDelete(event) {
    // TODO 17: Check if the clicked element is a delete button
    // Hint: if event.target.tagName is not equal to BUTTON
    // Return early from the function

    // TODO 18: Get the closest <li> element

    // TODO 19: use the api.deleteUser(id) function to delete
    // Hint: the id is stored in the data-id attribute of the <li>

    // TODO 20: re-render the users list by calling displayUsers()
}

// ===============================================
// DO NOT EDIT BELOW THIS LINE
// ===============================================

const api = (() => {
    const users = [
        { id: 1, name: "Alice", age: 30 },
        { id: 2, name: "Bob", age: 25 },
        { id: 3, name: "Charlie", age: 35 },
    ];

    let nextId = Math.max(...users.map(u => u.id)) + 1;

    function generateId() {   // private
        return nextId++;
    }

    return {
        getUsers() {
            return users.map(u => ({ ...u }));
        },
        deleteUser(id) {
            const index = users.findIndex(u => u.id === Number(id));
            if (index !== -1) users.splice(index, 1);
        },
        createUser(user) {

            users.push({
                id: generateId(),
                name: user.name,
                age: Number(user.age),
            });
        },
    };
})();