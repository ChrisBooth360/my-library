# My Personal Library

This application acts like a virtual bookshelf where a user can add specific versions of their books to their bookshelf and categorize them in various ways.

## Table of Contents
* [Project Goals and Scope](#project-goals-and-scope)
* [User Stories and Use Cases](#user-stories-and-use-cases)
* [Learning Journey]()

## Project Goals and Scope

### Goals

This project has two primary goals:

1. Keeping track of my physical library by creating a catalog of the specific versions of every book on my bookshelf.
2. Improving my knowledge and experience with the MERN tech stack

### Scope

This web application will have the following features and functionalities:

* User sign up and sign in. (Despite the inception of this project being about my own personal library, I want to teach myself sign-in/signup functionality - including authorization and authentication).
* Search functionality. Users will be able to search a database for specific versions of their books - this can be achieved by using an API and specific ISBN numbers.
* Users will be able to view all the details about their books, including, but not limited to:
    * Title
    * Author
    * Date of Publication
    * Current version publication
    * Number of Pages
    * Cover Image

* Users will be able to store and categorise books in a database that will act as their library.
* Users will be able to mark books as unread, read, or currently reading.
* Users will be able to update the progress of their currently reading books.
* Users will be able to rate their books, but not write reviews at this point.

What falls outside of the project's scope for the moment:
* Other users or visitors to the site will not be able to view others' books.
* Sharing reviews and progress of a book is not yet shareable on social media.
* Users will not have the option for 'want to read books' - as this web application is only for the store of books already on a user's bookshelf.

### User Stories and Use Cases:

* **As a visitor**, I want to see the homepage and browse a collection of featured books so that I can get an idea of what the application offers.
* **As a pre-registered user**, I want to be able to sign up to be able to create my own virtual bookshelf.
* **As a registered user**, I want to be able to log in to my account with my email and password so that I can access my personal library.
* **As a registered user**, I want to search for books by title, author, or ISBN number so that I can find and add specific books to my library.
* **As a registered user**, I want to add a book to my library and categorize it as "unread," "read," or "currently reading."
* **As a registered user**, I want to be able to categorize my books depending on genre, author, etc.
* **As a registered user**, I want to update my progress for books I'm currently reading, specifying the page or percentage I've completed.
* **As a registered user**, I want to rate the books in my library.
* **As a registered user**, I want to log out of my account to ensure the security of my personal library.

### Use Case 1: Browsing the Homepage as a Visitor

**Actors:** Visitor

**Description:**

The visitor arrives at the homepage of the personal library application.
On the homepage, the visitor can see a collection of featured books displayed.
Each featured book includes a book cover image, title, author, and a brief description.
The visitor can click on any featured book to view its details.
Clicking on a featured book redirects the visitor to the book's details page, where they can see more information about the book.
The visitor can navigate back to the homepage to explore other featured books or continue browsing.
Use Case 2: Registering as a New User

Actors: Visitor

Description:

The visitor arrives at the homepage of the personal library application.
The visitor sees a "Sign Up" or "Register" button in the application's navigation menu.
The visitor clicks on the "Sign Up" or "Register" button.
The system displays a registration form that prompts the visitor to enter the following information:
Full Name
Email Address
Password
Confirm Password
The visitor enters their details into the registration form.
The system validates the information, checking for proper email format and password matching.
If the validation is successful, the visitor is registered as a new user, and an account is created.
The system redirects the newly registered user to their dashboard or a welcome page.
The visitor is now a registered user and can access the full functionality of the application, including features like searching for books, adding books to their library, and managing their reading progress.

**Use Case :** Searching for New Books

**Actors:** Registered User

**Description:**

1. The registered user logs in to the application.
2. Once logged in, the user is directed to their dashboard.
3. The user clicks on the "Add new" button in the dashboard.
4. A search bar appears, allowing the user to enter book titles, author names, or ISBN numbers.
5. The user enters the title of a book they want to find and clicks the "Search" button.
6. The system queries an external book database for matching books and displays the search results on a new page.
7. The user can click on a book from the search results to view detailed information about the book.
8. The user can add the book to their library or return to the search results.

Use Case Title: Rating and Reviewing a Book

Actors: Registered User

Description:

The registered user logs in to the application.
The user navigates to their personal library.
In the library, the user selects a book they've read.
The user clicks on the book to view its details.
On the book's details page, the user can see the book's information, including the title, author, and description.
The user has the option to rate the book on a scale of 1 to 5 stars.
The user can also write a review for the book, providing comments and feedback.
After rating and reviewing, the user can save their changes.
Use Case Title: Adding a Book to the Library

Actors: Registered User

Description:

The registered user logs in to the application.
The user searches for a specific book using the search functionality.
The search results are displayed, and the user selects the desired book from the results.
On the book's details page, the user clicks an "Add to Library" button.
The user is prompted to categorize the book as "unread," "read," or "currently reading."
The user can also specify the progress if the book is "currently reading."
The book is added to the user's personal library with the chosen status.
Use Case Title: Updating Reading Progress

Actors: Registered User

Description:

The registered user logs in to the application.
The user goes to their personal library.
In the library, the user selects a book marked as "currently reading."
The user clicks on the book to view its details.
On the book's details page, the user can see their reading progress, such as the page number or percentage completed.
The user can update the progress by entering a new page number or percentage and saving the changes.
Use Case Title: Searching for Books

Actors: Registered User

Description:

The registered user logs in to the application.
The user navigates to their dashboard.
In the dashboard, the user clicks on the "Search" button.
A search bar appears, allowing the user to enter keywords, book titles, author names, or ISBN numbers.
The user enters the search query and clicks the "Search" button.
The system queries the database for matching books and displays the search results on a new page.
The user can click on a book from the search results to view detailed information about the book.
The user can add the book to their library or return to the search results.
Use Case Title: Logging Out

Actors: Registered User

Description:

The registered user is logged in to the application.
The user navigates to their account settings or profile page.
In the settings or profile page, the user finds a "Log Out" or "Sign Out" button.
The user clicks the "Log Out" button.
The system logs the user out and redirects them to the login page.

## TODO: Write Learning Journey

Learning a new tech stack as a not-quite-beginner software developer is a challenging thing. While there are many great free courses out there, a lot of them are targeted toward either complete beginners or advanced programmers. Tutorials can be viable options for those wanting to create new projects and develop skills, however, I have found that these are often paint-by-numbers coding where I don't actually learn anything or try anything new. 

That is why I've decided to create my 
