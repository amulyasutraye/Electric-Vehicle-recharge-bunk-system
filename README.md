# ⚡ Electric Vehicle Recharge Bunk System

This is a web-based application designed to help users locate and manage Electric Vehicle (EV) recharge stations. The system supports functionalities like user login/registration, managing recharge slots, viewing availability, and more — all built using HTML, CSS, JavaScript, and integrated with Firebase.

---

## 🚀 Features

- 🔐 User & Admin Authentication
- 🔋 View and manage EV recharge slots
- 🗺️ Search EV recharge bunk locations
- 📅 Book or update recharge slots
- 📊 Firebase Realtime Database Integration

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Authentication + Database)

---
##  Open the Project in a Browser
Just double-click any HTML file (like home.html) or open it manually in your browser.

## Setup Firebase
1. Go to Firebase Console
2. Create a new project
3. Copy your web app’s Firebase config
4. Paste it into firebasesdk.js like this:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

