const GET_ALL_CURRENCIES_REQUEST = 'GET_ALL_CURRENCIES_REQUEST';
const GET_ALL_CURRENCIES_SUCCESS = 'GET_ALL_CURRENCIES_SUCCESS';
const GET_ALL_CURRENCIES_FAILED = 'GET_ALL_CURRENCIES_FAILED';
const FILTER_BY_CURRENCY_NAME = 'FILTER_BY_CURRENCY_NAME';

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
        payload: { baseCurrency, currencies, currencyKeys },
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

export const filterByCurrency = (name) => (dispatch, getState) => {
  const currenciesState = getState().currenciesReducer;
  const payload = {
    currencies: currenciesState,
    filterName: name.toLowerCase(),
  };
  dispatch({ type: FILTER_BY_CURRENCY_NAME, payload });
};

const initialState = {
  loading: false,
  baseCurrency: '',
  worldCurrencies: [],
  currencyKeys: [],
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
        currencyKeys: action.payload.currencyKeys,
      };

    case GET_ALL_CURRENCIES_FAILED:
      return { ...state, error: true };

    case FILTER_BY_CURRENCY_NAME:
      return {
        ...state,
        worldCurrencies: [
          ...state.worldCurrencies.filter((worldCurrency) => (
            worldCurrency.currency.includes(action.payload.filterName))),
        ],
      };

    default:
      return state;
  }
};

export default currenciesReducer;
