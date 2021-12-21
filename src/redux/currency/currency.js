const GET_ALL_CURRENCIES_REQUEST = 'GET_ALL_CURRENCIES_REQUEST';
const GET_ALL_CURRENCIES_SUCCESS = 'GET_ALL_CURRENCIES_SUCCESS';
const GET_ALL_CURRENCIES_FAILED = 'GET_ALL_CURRENCIES_FAILED';

export const getCurrencies = (currency) => (dispatch) => {
  dispatch({ type: GET_ALL_CURRENCIES_REQUEST });
  const fetchCurrencies = async () => {
    try {
      const res = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
      );
      const data = await res.json();
      const baseCurrency = Object.keys(data)[1];
      const currencyKeys = Object.keys(data[baseCurrency]);
      const currencies = currencyKeys.map((currencyKey) => ({
        currency: currencyKey,
        rate: data[baseCurrency][currencyKey],
      }));

      dispatch({
        type: GET_ALL_CURRENCIES_SUCCESS,
        payload: { baseCurrency, currencies },
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_CURRENCIES_FAILED,
        payload: 'Ooops! Something bad happened...',
      });
    }
  };

  fetchCurrencies();
};

const initialState = {
  loading: false,
  baseCurrency: '',
  worldCurrencies: [],
  error: null,
};

const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CURRENCIES_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        baseCurrency: action.payload.baseCurrency,
        worldCurrencies: action.payload.currencies,
      };
    case GET_ALL_CURRENCIES_FAILED:
      return { ...state, error: true };

    default:
      return state;
  }
};

export default currenciesReducer;
