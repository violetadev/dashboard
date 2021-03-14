export interface UserSettingsStateInterface {
  userName: string;
  topics: string[];
}

export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_TOPICS = 'SET_USER_TOPICS';

export type Action = {
  type: string;
  payload: {
    data: any;
  };
};

export const setUserName = (name: string): Action => ({
  type: SET_USER_NAME,
  payload: { data: name },
});

export const setUserTopics = (topic: string[]): any => ({
  type: SET_USER_TOPICS,
  payload: { data: topic },
});

const initialState: UserSettingsStateInterface = {
  userName: '',
  topics: [],
};

const userSettingsReducer = (
  state = initialState,
  action: { type: string; payload: any }
): UserSettingsStateInterface => {
  switch (action.type) {
    case SET_USER_NAME: {
      return { ...state, userName: action.payload.data };
    }
    case SET_USER_TOPICS: {
      return { ...state, topics: action.payload.data };
    }

    default:
      break;
  }
  return state;
};

export default userSettingsReducer;
