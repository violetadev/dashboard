import { createSlice } from '@reduxjs/toolkit';

interface UserSettingsStateInterface {
  userName: string;
  topics: string[];
}

const initialState: UserSettingsStateInterface = {
  userName: '',
  topics: [],
};

const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    getUserName(state, action) {
      return { ...state, userName: action.payload };
    },
    setUserName(state, action) {
      return { ...state, userName: action.payload };
    },
    getUserTopics(state, action) {
      return { ...state, userName: action.payload };
    },
    setUserTopics(state, action) {
      return { ...state, userName: action.payload };
    },
  },
});

export const {
  getUserName,
  setUserName,
  getUserTopics,
  setUserTopics,
} = userSettingsSlice.actions;

export const userSettingsReducer = userSettingsSlice.reducer;
