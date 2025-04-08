# Would You Rather App

An interactive polling app built using **React** and **Redux**, where users can log in, answer questions, create new ones, and track their score through a leaderboard.

## Features

- User authentication with custom avatars
- Ability to create and answer polling questions
- View real-time leaderboard with user scores
- Built with **React**, **Redux**, **React Router**, and **React Thunk**

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/halleluyahadesuyi/would-you-rather.git
    ```
2. Install the required dependencies:
    ```bash
    cd would-you-rather
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
> 📍 The app will run on `localhost:3000`.

## 📄 Data Structure

### Users
Each user object includes:
- `id` (string): Unique user identifier
- `name` (string): User’s name
- `avatarURL` (string): Link to the user's avatar
- `questions` (array): List of IDs for questions the user created
- `answers` (object): User's answers to questions (stores answers as keys: `optionOne` and `optionTwo`)

### Questions
Each question object contains:
- `id` (string): Unique question identifier
- `author` (string): ID of the user who created the question
- `timestamp` (string): Date and time when the question was created
- `optionOne` (object): First option in the question
- `optionTwo` (object): Second option in the question

### Voting
Users vote by selecting one of the two available options.

## 💻 Usage

- Login to the app to start answering questions.
- Create new polling questions with two voting options.
- Track your score on the leaderboard based on the number of polls answered.

## 🔗 Live Demo

Since this is a React app running locally, it is best to follow the installation instructions above to see it in action.  
You can also check out the live demo here:  
[Live Demo](https://would-you-rather-web.netlify.app/).

## Tech Stack

- **React**
- **Redux**
- **React Router**
- **React Thunk**

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
