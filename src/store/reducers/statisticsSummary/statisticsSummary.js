import {
  STATISTICS_SUMMARY_GET_SUCCESS,
  STATISTICS_SUMMARY_GET_FAILURE,
  STATISTICS_SUMMARY_GET_REQUEST,
} from "../../actions/statisticsSummary/actionTypes";

import StatisticsSummary from "../../../model/StatisticsSummary";

const continetalDeathData = [
  {
    country: "Poland",
    deaths: 10000,
    lat: 52.237049,
    lon: 21.017532,
  },
  {
    country: "Germany",
    deaths: 10000,
    lat: 51.5167,
    lon: 9.9167,
  },
  {
    country: "Brazil",
    deaths: 10000,
    lat: -22.9137531,
    lon: -43.5860654,
  },
  {
    country: "Argentina",
    deaths: 10000,
    lat: -34.6156625,
    lon: -58.5033379,
  },
  {
    country: "Colombia",
    deaths: 10000,
    lat: 4.6486259,
    lon: -74.2478915,
  },
  {
    country: "Venezuela (Bolivarian Republic)",
    deaths: 10000,
    lat: 10.4685529,
    lon: -66.9604059,
  },
  {
    country: "Bolivia",
    deaths: 10000,
    lat: -17.3939741,
    lon: -66.198895,
  },
  {
    country: "Mexico",
    deaths: 10000,
    lat: 19.3910038,
    lon: -99.2836969,
  },
  {
    country: "United States of America",
    deaths: 10000,
    lat: 40.6976637,
    lon: -74.1197637,
  },

  {
    country: "Canada",
    deaths: 10000,
    lat: 57.8768778,
    lon: -101.983303,
  },
  {
    country: "Japan",
    deaths: 10000,
    lat: 35.6684415,
    lon: 139.6007845,
  },

  {
    country: "China",
    deaths: 10000,
    lat: 39.9390731,
    lon: 116.1172792,
  },
  {
    country: "India",
    deaths: 10000,
    lat: 19.0825223,
    lon: 72.7411019,
  },
  {
    country: "Australia",
    deaths: 10000,
    lat: -33.8473567,
    lon: 150.6517965,
  },
  {
    country: "Papua New Guinea",
    deaths: 10000,
    lat: -6.4126747,
    lon: 144.1007264,
  },
  {
    country: "Singapore",
    deaths: 10000,
    lat: 1.3143394,
    lon: 103.7041656,
  },
  {
    country: "Philippines",
    deaths: 10000,
    lat: 14.5965788,
    lon: 120.9445403,
  },
  {
    country: "Costa Rica",
    deaths: 10000,
    lat: 10.0306196,
    lon: -84.1518232,
  },
  {
    country: "Guyana",
    deaths: 10000,
    lat: 4.9907617,
    lon: -59.2700597,
  },
  {
    country: "Thailand",
    deaths: 10000,
    lat: 13.7248936,
    lon: 100.4930264,
  },
  {
    country: "Iran, Islamic Republic of",
    deaths: 10000,
    lat: 32.3447836,
    lon: 52.2107014,
  },

  {
    country: "United Arab Emirates",
    deaths: 10000,
    lat: 24.3523893,
    lon: 52.8347334,
  },
  {
    country: "Madagascar",
    deaths: 10000,
    lat: -18.887503,
    lon: 47.4424741,
  },

  {
    country: "South Africa",
    deaths: 10000,
    lat: -30.8110621,
    lon: 23.7262252,
  },
  {
    country: "Angola",
    deaths: 10000,
    lat: -12.3022934,
    lon: 16.9074263,
  },

  {
    country: "Congo (Brazzaville)",
    deaths: 10000,
    lat: -3.1086141,
    lon: 22.6942209,
  },

  {
    country: "Nigeria",
    deaths: 10000,
    lat: 9.4810814,
    lon: 7.5428826,
  },

  {
    country: "Egypt",
    deaths: 10000,
    lat: 30.0595581,
    lon: 31.2234449,
  },
  {
    country: "Morocco",
    deaths: 10000,
    lat: 31.696965,
    lon: -8.006057,
  },
  {
    country: "Italy",
    deaths: 10000,
    lat: 41.9102415,
    lon: 12.3959153,
  },

  {
    country: "Spain",
    deaths: 10000,
    lat: 40.4381311,
    lon: -3.8196194,
  },
  {
    country: "Russian Federation",
    deaths: 10000,
    lat: 55.5815245,
    lon: 36.8251409,
  },
  {
    country: "Ethiopia",
    deaths: 10000,
    lat: 8.5803121,
    lon: 39.2487481,
  },
];

const inialState = {
  statisticsSummary: [],
  loading: false,
  error: null,
};

export const statisticsSummaryReducer = (state = inialState, action) => {
  switch (action.type) {
    case STATISTICS_SUMMARY_GET_SUCCESS:
      for (const key of continetalDeathData) {
        for (const key2 of action.payload.Countries) {
          if (key2.Country === key.country) {
            key.deaths = key2.TotalDeaths;
            break;
          }
        }
      }

      return {
        ...state,
        statisticsSummary: continetalDeathData,
        loading: false,
        error: null,
      };
    case STATISTICS_SUMMARY_GET_FAILURE:
      return { ...state, loading: false, error: action.error };
    case STATISTICS_SUMMARY_GET_REQUEST:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};
