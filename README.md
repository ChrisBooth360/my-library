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

1. The visitor arrives at the homepage of the personal library application.
2. On the homepage, the visitor can see a collection of featured books displayed.
3. Each featured book includes a book cover image, title, author, and a brief description.
4. The visitor can click on any featured book to view its details.
5. Clicking on a featured book redirects the visitor to the book's details page, where they can see more information about the book.
6. The visitor can navigate back to the homepage to explore other featured books or continue browsing.

### Use Case 2: Registering as a New User

**Actors:** Visitor

**Description:**

1. The visitor arrives at the homepage of the personal library application.
2. The visitor sees a "Sign Up" or "Register" button in the application's navigation menu.
3. The visitor clicks on the "Sign Up" or "Register" button.
4. The system displays a registration form that prompts the visitor to enter the following information:
    * Full Name
    * Email Address
    * Password
    * Confirm Password
5. The visitor enters their details into the registration form.
6. The system validates the information, checking for proper email format and password matching.
7. If the validation is successful, the visitor is registered as a new user, and an account is created.
8. The system redirects the newly registered user to their dashboard or a welcome page.
9. The visitor is now a registered user and can access the full functionality of the application, including features like searching for books, adding books to their library, and managing their reading progress.

## Use Case 3: Searching and Adding a Book to the Library

**Actors:** Registered User

**Description:**

1. The registered user logs in to the application.
2. The user searches for a specific book using the search functionality.
3. The search results are displayed, and the user selects the desired book from the results.
4. On the book's details page, the user clicks an "Add to Library" button.
5. The user is prompted to categorize the book as "unread," "read," or "currently reading."
6. The book is added to the user's personal library with the chosen status.
7. If the book is marked 'read', the user has the option of leaving a rating before adding it to their library.
8. If the book is marked 'currently reading', the reader has the option of updating the reading progress.

## Use Case 4: Viewing Books in Library

**Actors:** Registered User

**Description:**
1. The registered user logs in to the application.
2. The user sees a dashboard that lists all the books in their library.
3. The user can organise their library by title, author, rating, category, genre, etc.
    * The default sorting is "currently reading" at the top, "unread" second and "read third". Each category is presented alphabetically by author by default.
4. The user is able to search their collection, add a new book, leave reviews for read books and update "currently reading" progress.


## Use Case 5: Updating Reading Progress

**Actors:** Registered User

**Description:**

1. The registered user logs in to the application.
2. The user goes to their personal library.
3. In the library, the user selects a book marked as "currently reading."
4. The user clicks on the book to view its details.
5. On the book's details page, the user can see their reading progress, such as the page number or percentage completed.
6. The user can update the progress by entering a new page number or percentage and saving the changes.

## Use Case 6: Rating and Reviewing a Book

**Actors:** Registered User

**Description:**

1. The registered user logs in to the application.
2. The user navigates to their personal library.
3. In the library, the user selects a book they've read.
4. The user clicks on the book to view its details.
5. On the book's details page, the user can see the book's information, including the title, author, and description.
6. The user has the option to rate the book on a scale of 1 to 5 stars.
7. After rating and reviewing, the user can save their changes.

## Use Case 7: Logging Out

**Actors:** Registered User

**Description:**

1. The registered user is logged in to the application.
2. The user navigates to their account settings or profile page.
3. In the settings or profile page, the user finds a "Log Out" or "Sign Out" button.
4. The user clicks the "Log Out" button.
5. The system logs the user out and redirects them to the login page.

## TODO: Write Learning Journey

Learning a new tech stack as a not-quite-beginner software developer is a challenging thing. While there are many great free courses out there, a lot of them are targeted toward either complete beginners or advanced programmers. Tutorials can be viable options for those wanting to create new projects and develop skills, however, I have found that these are often paint-by-numbers coding where I don't actually learn anything or try anything new. 

That is why I've decided to create my 
