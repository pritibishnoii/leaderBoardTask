# 🏆 Leaderboard Task

A simple full-stack application to manage and track leaderboard points for users. Built with **Node.js**, **Express**, **MongoDB**, and **React.js**.

## 🚀 Features

- Select and add users dynamically from the frontend.
- Claim random points (1 to 10) for a user.
- Maintain a history log of claimed points.
- Live leaderboard based on total points.
- Clean, responsive UI with reusable React components.

---

## 🧰 Tech Stack

### Frontend

- React.js
- Axios
- moment
- tailwind
- CSS / Tailwind (optional)

### Backend

- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## 📚 API Documentation

### 👤 Users

- **Get all users**

  - `GET /api/users`
  - Returns a list of all users and the user count.

- **Add new user**

  - `POST /api/users`
  - Body:
    ```json
    {
      "name": "John"
    }
    ```
  - Adds a new user. Returns 409 if the user already exists.

- **Claim random points for a user**

  - `POST /api/users/claim`
  - Body:
    ```json
    {
      "userId": "<user_id>"
    }
    ```
  - Awards 1-10 random points to the user and logs the event in history.

- **Get leaderboard**
  - `GET /api/users/leaderboard`
  - Returns users sorted by total points, with rank.

---

### 🕑 History

- **Get history of all point claims**
  - `GET /api/history`
  - Returns a list of all point claim events, most recent first.
