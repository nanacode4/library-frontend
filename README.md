# 📚 Library System

A **React & TypeScript**-powered **Library System** that allows users to browse, borrow, return, and review books, while administrators can manage the library, track book inventory, and handle user interactions. The system features a secure authentication flow using Okta, a user-friendly UI, and efficient book management tools.


## 🌟 Features

### 1️⃣ User Authentication
- **Login**: Secure login using Okta authentication.
- **Protected Routes**: Restricts access to certain pages unless logged in.
- **Login Callback**: Users are automatically redirected after authentication.

![Login Page](src/Images/screenshot/login.png)

---

### 2️⃣ Home Page
- **Homepage**: Displays featured books and trending categories.
| ![Home Page](src/Images/screenshot/home.png) | 

---
### 3️⃣ Book Search
- **Book Search**: Find books by title, author, or category.
| ![Book Search](src/Images/screenshot/Book Checkout.png) | 


### 3️⃣ Book Details & Checkout
- **Book Details**: View book descriptions, ratings, and availability.
- **Book Checkout**: Borrow books with a seamless checkout process.

| Book Details | Book Checkout |
|--------------|--------------|
| ![Book Details](src/Images/screenshot/book details.png) | ![Checkout Page](src/Images/screenshot/Book Checkout.png) |

---

### 4️⃣ Personal Bookshelf & Reviews
- **My Loans**: Track borrowed books and due dates.
- **Review System**: Rate and review books.

| My Loans | Reviews |
|----------|--------|
| ![Loans](src/Images/screenshot/loan.png) | ![Reviews](src/Images/screenshot/history.png) |

---

### 5️⃣ Messaging System
- **User Messages**: Communicate with administrators directly.
- **Admin Notifications**: Receive system updates and important alerts.

![Messaging System](src/Images/screenshot/message.png)

---

### 6️⃣ Admin Panel
- **Manage Books**: Add, remove, or update book details.
- **Inventory Control**: Adjust book quantities and availability.
- **User Management**: Monitor borrowed books and overdue fines.

![Manage Library](src/Images/screenshot/manage library.png)

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/library-management-app.git
   cd library-management-app




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
