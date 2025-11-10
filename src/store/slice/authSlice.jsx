import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//  LOGIN 
export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    // Hardcoded admin login
    if (data.username === "admin" && data.password === "admin123") {
      const adminUser = {
        id: 0,
        username: "admin",
        name: "Admin User",
        role: "admin",
      };
      localStorage.setItem("user", JSON.stringify(adminUser));
      return adminUser;
    }

    // Normal user login via dummyjson API
    const req = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    });

    const res = await req.json();

    if (res.message) return rejectWithValue(res.message);

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(res));
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

//  SIGNUP 
export const signup = createAsyncThunk("auth/signup", async (data) => {
  // Simulate API signup role can be "user" or "admin"
  const newUser = {
    id: Date.now(),
    ...data,
  };
  return newUser;
});

// ------------------------- SLICE -------------------------
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    //  LOGIN 
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });

    //  SIGNUP 
    builder.addCase(signup.fulfilled, (state, action) => {
      console.log("User signed up:", action.payload);
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
