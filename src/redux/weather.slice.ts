import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ReduxAction } from './ReduxAction.type';
import axios from 'axios';

interface WeatherState {
  isLoading: boolean;
  weather: any;
}

const initialState: WeatherState = {
  isLoading: false,
  weather: {},
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setWeather: (state: WeatherState, payload: any) => {
      state.weather = payload.payload;
    },
  },
});
const { actions } = weatherSlice;

export const fetchWeather =
  (id: string): ReduxAction =>
  async (dispatch: any) => {
    dispatch(actions.startLoading());
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${id}/next7days?unitGroup=metric&elements=datetime%2Cname%2Ctempmax%2Ctempmin%2Cwindspeed%2Cdescription&include=days&key=VDALLYDBDPATG9RX7XH5NHFMW&contentType=json`
      );
      dispatch(actions.setWeather(response.data));
    } catch (err: any) {
      toast.error(err.message);
    }
    dispatch(actions.stopLoading());
  };

const weatherSliceReducer = weatherSlice.reducer;

export default weatherSliceReducer;
