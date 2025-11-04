import { createSlice } from "@reduxjs/toolkit";

//  Load logged-in user (if any)
const storedUser = JSON.parse(localStorage.getItem("user"));

//  Predefined Admin Account (fixed, not creatable by signup)
const adminAccount = {
  email: "admin@example.com",
  password: "admin123",
  role: "admin",
  name: "Admin",
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
  },
  reducers: {
    //  SIGNUP
    signup: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const { email } = action.payload;

      //  Prevent using admin email for signup
      if (email === adminAccount.email) {
        alert("This email is reserved for admin. Please use another email.");
        return;
      }

      // Prevent duplicate registration
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        alert("This email is already registered. Please log in instead.");
        return;
      }

      //  Create new user with "user" role
      const newUser = { ...action.payload, role: "user" };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Signup successful! You can now log in.");
    },

    // LOGIN
    login: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const { email, password } = action.payload;
      let user = null;

      //  Check for admin login
      if (email === adminAccount.email && password === adminAccount.password) {
        user = adminAccount;
      } else {
        // Check for normal user
        user = users.find((u) => u.email === email && u.password === password);
      }

      if (user) {
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user));
        alert(`Welcome back, ${user.role === "admin" ? "Admin" : user.name || "User"}!`);
      } else {
        alert("Invalid email or password!");
      }
    },

    //  LOGOUT
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice;
