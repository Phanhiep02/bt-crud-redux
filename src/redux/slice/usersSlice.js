import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
  formUser: {
    name: "",
    age: 0,
    gender: "male",
    address: "",
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    formValue: (state, action) => {
      const { name, value } = action.payload;
      state.formUser[name] = value;
    },
    resetForm: (state) => {
      state.formUser = {
        name: "",
        age: 1,
        gender: "male",
        address: "",
      };
    },
    setForm: (state, action) => {
      state.formUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { formValue, resetForm, setForm } = usersSlice.actions;

// middleware
// api getUsers
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_API}/users`);
  if (!response.ok) {
    throw new Error("fail to fetch");
  }
  return response.json();
});

// post
export const addUser = createAsyncThunk("users/addUser", async (data) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("fail to fetch");
  }
  return response.json();
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_API}/users/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("fail to fetch");
  }
  return id;
});
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, data }) => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_API}/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("fail to fetch");
    }
    return response.json();
  }
);
