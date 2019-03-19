export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const LIST_FETCH_START = 'LIST_FETCH_START';
export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';

export const updateUsername = payload => ({
  type: UPDATE_USERNAME,
  payload
});

export const listFetchStart = () => {
  return {
    type: LIST_FETCH_START
  };
};

export const listFetchSuccess = payload => {
  return {
    type: LIST_FETCH_SUCCESS,
    payload
  };
};

export const fetchUserData = (dispatch, url) => {
  return dispatch => {
    dispatch(listFetchStart());
    fetch(url)
      .then(response => response.json())
      .then(response => dispatch(listFetchSuccess(response)));
  };
};
