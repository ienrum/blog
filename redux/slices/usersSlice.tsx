import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const initialState: { users: User[] } = {
  users: [{ id: 0, name: "moto", email: "ok@google.com", password: "alright" }],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      const { id, name, email, password } = action.payload;
      state.users = state.users.map((user) => {
        if (user.id === id) {
          return { id, name, email, password };
        }
        return user;
      });
    },
  },
});

export const { setUsers, updateUser } = usersSlice.actions;

export const selectUsers = (state: { users: typeof initialState }) =>
  state.users.users;

export default usersSlice.reducer;
