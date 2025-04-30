# Chit-Chat 🗨️

Chit-Chat is a real-time messaging application built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides seamless and secure messaging, profile customization, multimedia sharing, and group chat features.

## 🌐 Live Demo

[Coming Soon]

## 🚀 Features

- 🔒 User Authentication (JWT-based)
- 📬 Real-time One-on-One & Group Messaging (Socket.IO)
- 🧑‍🤝‍🧑 Group Chat Support
- 🖼️ Profile Image Uploads
- 🗃️ Multimedia Sharing (Images, Files)
- ✅ Online/Offline Status Indicator
- 🔔 Instant Notifications
- 📱 Responsive UI (Mobile & Desktop)
- 🌙 Dark Mode (optional)

## 🛠️ Tech Stack

**Frontend:**  
- React.js  
- Redux (for state management)  
- Socket.IO Client  
- Tailwind CSS / Styled Components (customizable)

**Backend:**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- Socket.IO (for real-time communication)  
- JWT Authentication  
- Multer (for image/file uploads)

## 🏗️ Project Structure

chit-chat
├── client
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── manifest.json
│   └── src
│       ├── components
│       │   ├── ChatContainer.js
│       │   ├── ContactList.js
│       │   ├── MessageInput.js
│       │   ├── MessageList.js
│       │   └── Navbar.js
│       ├── pages
│       │   ├── ChatPage.js
│       │   ├── LoginPage.js
│       │   └── SignupPage.js
│       ├── redux
│       │   ├── store.js
│       │   └── userSlice.js
│       ├── App.css
│       ├── App.js
│       ├── index.css
│       └── index.js
│
├── server
│   ├── controllers
│   │   ├── authController.js
│   │   └── messageController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   ├── Message.js
│   │   └── User.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── messageRoutes.js
│   ├── socket
│   │   └── index.js
│   ├── .env.example
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json

## ⚙️ Installation

1. **Clone the Repository**

bash
git clone https://github.com/your-username/chit-chat.git
cd chit-chat

2. **Install Dependencies**

# Backend
cd server
npm install

# Frontend
cd ../client
npm install

# Configure Environment Variables

Create a .env file in both server/ and client/ directories.

Server .env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Client .env

REACT_APP_API_URL=http://localhost:5000

## Run the App

# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start

## 🧪 Testing
Use tools like Postman for API testing and multiple browser sessions to test real-time functionality.

## 📦 Future Enhancements

- Voice & Video Calling
- Message Reactions & Emojis
- Message Search & Filtering
- End-to-End Encryption
- Read Receipts

👤 Author
Tarun Singh Rawat
