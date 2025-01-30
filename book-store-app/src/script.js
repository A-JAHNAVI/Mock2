const apiUrl = "https://well-sapphire-muenster.glitch.me";

// Login Function
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    const message = document.getElementById("login-message");

    if (data.success) {
        message.textContent = "Login successful!";
        document.getElementById("login-section").style.display = "none";
        document.getElementById("books-section").style.display = "block";
        fetchBooks();
    } else {
        message.textContent = "Invalid credentials!";
    }
}

// Fetch Books Function
async function fetchBooks() {
    const sort = document.getElementById("sort").value;
    const search = document.getElementById("search").value;

    let url = `${apiUrl}/books`;
    if (sort) url += `?sort=${sort}`;
    if (search) url += `&category=${search}`;

    const response = await fetch(url);
    const data = await response.json();

    const bookList = document.getElementById("books");
    bookList.innerHTML = data.books.map(book => `<li>${book.name} - $${book.price}</li>`).join("");
}
