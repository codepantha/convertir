const CONVERSION_RATE_REQUEST = 'CONVERSION_RATE_REQUEST';
const CONVERSION_RATE_SUCCESS = 'CONVERSION_RATE_SUCCESS';
const CONVERSION_RATE_FAILED = 'CONVERSION_RATE_FAILED';
const BASEURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

export const getConversionRate = (from, to) => (dispatch) => {
  dispatch({ type: CONVERSION_RATE_REQUEST });

  const fetchRate = async () => {
    try {
      const response = await fetch(`${BASEURL}/${from}/${to}.json`);
      const rate = await response.json();
      dispatch({ type: CONVERSION_RATE_SUCCESS, payload: rate });
    } catch (e) {
      dispatch({
        type: CONVERSION_RATE_FAILED,
        payload: 'Ooops! Something went wrong...',
      });
    }
  };
  fetchRate();
};

const initialState = {
  loading: false,
  rate: {},
  error: null,
};

const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONVERSION_RATE_REQUEST:
      return { ...state, loading: true };
    case CONVERSION_RATE_SUCCESS:
      return { ...state, rate: action.payload, loading: false };
    case CONVERSION_RATE_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default ratesReducer;
