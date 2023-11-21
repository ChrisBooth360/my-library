# My Personal Library

This application acts like a virtual bookshelf where a user can add specific versions of their books to their bookshelf and categorize them in various ways.

## Table of Contents
* [Project Goals and Scope](#project-goals-and-scope)
* [User Stories and Use Cases](#user-stories-and-use-cases)
* [Technology Stack: MERN](#technology-stack-mern)
* [Database Schema Design](#database-schema-design)
* [Learning Journey]()

## Project Goals and Scope

### Goals

This project has two primary goals:

1. Keeping track of my physical library by creating a catalog of the specific versions of every book on my bookshelf.
2. Improving my knowledge and experience with the MERN tech stack

### Scope

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

## Technology Stack: MERN

The choice of the MERN stack, which includes MongoDB, Express.js, React, and Node.js, is well-suited for this personal library web application. 

* MongoDB, a NoSQL database, provides flexibility in handling book information, allowing for easy storage and retrieval. 
* Express.js, as the backend framework, simplifies the creation of robust and scalable APIs for handling user authentication, book management, and other functionalities. 
* React, on the frontend, facilitates the development of a dynamic and responsive user interface, enabling seamless interaction with the application. 
* Node.js serves as the runtime environment, ensuring a unified JavaScript codebase throughout the stack. 

This cohesive and full-stack MERN architecture allows for efficient development, easier maintenance, and provides a solid foundation for building a feature-rich and user-friendly personal library application.

## Database Schema Design


MongoDB is flexibile and scalabile, aligning well with the dynamic nature of book data and diverse user preferences. MongoDB's document-based, NoSQL architecture allows for the easy representation of complex and varied book information, accommodating changes and additions seamlessly.

The use of Mongoose as the Object-Relational Mapping (ORM) tool enhances the interaction between the Node.js application and MongoDB, providing a structured schema, validation, and powerful query-building capabilities. Mongoose simplifies the integration of MongoDB with Node.js, streamlining the development process and ensuring data consistency, making it an ideal choice for managing the intricate relationships between users, books, and their associated information in the library application.

Below is the outline for the Database Schema for this application. 

1. Users Collection

Each user has a unique profile stored in the Users collection.

```
{
    _id: ObjectId, //required
    email: String, // required
    password: String, // Hashed password - required
    first_name: String,
    last_name: String
}
```
2. Books Collection
Each book has a unique entry in the Books collection.

```
{
    _id: ObjectId,
    isbn: Number // required & unique
    title: String,
    author: String,
    pages: Number,
    curr_pub_date: Date, // publish date of this edition
    ori_pub_date: Date, // first published date
    blurb: String,
    genres: Array,
    image: {
        data: Buffer, // Binary data for the image
        contentType: String, // MIME type of the image (e.g., image/jpeg)
    }
}
```

3. Library Collection

The Library collection links users to the books they own or are currently reading. It stores additional information such as reading status, progress, and rating.

* The userId field in the Library collection establishes a relationship with the Users collection.
* The bookId field in the Library collection establishes a relationship with the Books collection.

```
{
    _id: ObjectId,
    userId: ObjectId, // Reference to the Users collection
    bookIds: [ObjectId], // Array of references to the Books collection
    status: String, // "unread", "read", "currentlyReading"
    progress: {
        pages: Number, // Reading progress in pages
        percentage: Number, // Reading progress percentage
    },
    rating: Number // User's rating for the book
}
```

## Data Flow and API Endpoints

In the data flow of the library application, the frontend will communicate with the backend through a set of well-defined APIs. These APIs will serve various purposes, including user authentication, book management, and reading progress tracking. The data flow can be outlined as follows:

1. **User Authentication:**
* **Endpoint:**  `/api/auth`
* **Description:** Handles user authentication, allowing users to register, log in, and log out securely.
* **Methods:**
    * `POST` - Register a new user.
    * `POST` - Log in an existing user.
    * `POST` - Log out the authenticated user.

2. **Book Management:**
* **Endpoint:** `/api/books`
* **Description:** Manages user's personal library, including adding new books, updating book details, and removing books.
* **Data Flow:**
    * Frontend sends requests to /api/books for operations like adding, updating, or removing books.
    * Backend processes requests, updating the MongoDB database accordingly.
    * Updated book information is sent back to the frontend for display.
* **Methods:**
    * `GET` - Retrieve the user's book library.
    * `POST` - Add a new book to the library.
    * `PUT` - Update details of an existing book.
    * `DELETE` - Remove a book from the library.

3. **Reading Progress Tracking:**
* **Endpoint:** `/api/:isbn/reading-progress`
* **Description:** Tracks and manages users' reading progress for each book.
* **Data Flow:**
    * Frontend sends requests to /api/reading-progress for updating reading progress, status, and rating.
    * Backend updates the MongoDB database with the provided progress data.
    * Relevant updates are sent back to the frontend for real-time display.
* **Methods:** 
    * `GET` - Retrieve reading progress for a specific book.
    * `PUT` - Update reading progress, status, rating, and reviews for a book.

4. **External Book Search:**
* **Endpoint:** `/api/books/search`
* **Description:** Facilitates searching for books using the Google Books API.
* **Data Flow:**
    * Frontend sends search queries to /api/books/search.
    * Backend interacts with the Google Books API, retrieves book information.
    * Google Books API response is processed and sent back to the frontend.
    * Frontend updates the interface with search results.
* **Methods:**
    * `GET` - Search for books using the Google Books API.

## TODO: Write Learning Journey

**Outline of Blog Post:**
1. Introduction
2. Conception of My Library
3. What I set out to learn
4. Step 1/Lesson 1: Using ChatGPT
5. Step 2/Lesson 2: Planning vs Doing
6. Step 3/Lesson 3: Backend first - no user authentification yet

I am at the stage in my coding journey where I don't want to do any more beginner 'cookie-cutter' projects. I want to do something that sparks my passion and stands out a little from the generic calculators and weather apps. 

The trouble is that most tutorials online are either for abolute beginners, or they are paint-by-number projects that I'm not interested in. The second problem is that if I don't use tutorials for my own projects, how will I learn to create something at this intermediate stage? This is where my true self-taught learning journey begins. 

Here I will share how I came up with my project idea, how I went about creating it, and the things I learnt along the way.

## The Conception of My Library

I love to read. But I love one thing more: to collect books. While I don't mind reading a good ebook, there is nothing better than holding a physical book and turning real pages. I also enjoy using an app like GoodReads - I can add books I want to read to my profile, set myself reading goals, and even show off my reading progress. (There's nothing better than the endorphine hit you get when you mark a book complete on GoodReads.) This lead me to toy with the idea of creating a GoodReads clone. But at the same time, I didn't want to build an *exact* clone. I wanted something a little more personal.

This is where my physical TBR (to be read) comes in. While moving house to a smaller place, I realised that I would have to put some of my books into storage - or lend them out. The problem is that, while on GoodReads I have a whole bunch of 'read' and 'want to read' books that I do not own, I didn't have anything to catelogue and keep track of the physical books I actually have. I also wanted to add to my shelves the *exact* version of the book I owned (something that I didn't know was possible with GoodReads until after this whole process).

But with these two things in mind, I decided to create my own application that would act as a catelogue for all my owned books. This is where the idea for My Library was born.




