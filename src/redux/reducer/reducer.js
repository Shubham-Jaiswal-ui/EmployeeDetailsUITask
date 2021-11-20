import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
} from "../../constant/constant";

const initialState = {
  dataSuccess: {},
  dataError: false,
  dataLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, dataLoading: true };
    case DATA_SUCCESS:
      return { dataLoading: false, dataSuccess: action.data, dataError: false };
    case DATA_ERROR:
      return { ...state, dataLoading: false, dataError: action.error };
    default:
      return state;
  }
};
