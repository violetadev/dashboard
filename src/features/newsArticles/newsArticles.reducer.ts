import { API_SUCCESS } from '../request/request.reducer';

export interface NewsStateInterface {
  news: {
    science: string[];
    tech: string[];
    sport: string[];
    opinion: string[];
    culture: string[];
    lifestyle: string[];
    business: string[];
    world: string[];
  };
  loading: boolean;
}

export const GET_NEWS = 'GET_NEWS';

export type Action = {
  type: string;
  payload?: {
    data?: any;
  };
};

export const getNews = (topics: string[]): Action => ({
  type: GET_NEWS,
  payload: { data: topics },
});

const initialState: NewsStateInterface = {
  news: {
    science: [],
    tech: [],
    sport: [],
    opinion: [],
    culture: [],
    lifestyle: [],
    business: [],
    world: [],
  },
  loading: false,
};

const newsReducer = (
  state = initialState,
  action: { type: string; payload: { data: any; meta: any } }
): NewsStateInterface => {
  switch (action.type) {
    case `${GET_NEWS} ${API_SUCCESS}`: {
      const newsFound = action.payload.data.response.results;
      const newsByTopic = newsFound.filter(
        article => article.sectionId === action.payload.meta.extraData.topic
      );
      return { ...state, news: action.payload.data.response.results };
    }

    default:
      break;
  }
  return state;
};

export default newsReducer;
