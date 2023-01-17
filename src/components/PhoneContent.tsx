import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { fetchWeather } from '../redux/weather.slice';
import TodayWeather from './TodayWeather';
import meterPerSecondConverter from '../utils/meterPerSecondConverter';
import Loading from './Loading';

export default function PhoneContent() {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const weatherData = useAppSelector((state) => state.weather.weather);
  const loading = useAppSelector((state) => state.weather.isLoading);

  const onClickHandler = () => {
    dispatch(fetchWeather(query));
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(fetchWeather(query));
    }
  };

  useEffect(() => {
    if (typeof weatherData.resolvedAddress === 'undefined') {
      return;
    } else {
      setQuery(weatherData.resolvedAddress);
    }
  }, [weatherData]);

  return (
    <div className="bg-fuchsia-100 flex place-content-evenly flex-col h-3/5 w-3/4 relative sm:h-[844px] z-1 sm:w-[390px] border-4 border-black rounded-3xl">
      <div className="w-full p-6 sm:p-8">
        <input
          onKeyDown={handleEnterKey}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          name="location"
          id="location"
          className="block p-2 sm:p-4 w-full rounded-full border-2 border-black "
          placeholder="Location"
        />
      </div>
      {Object.keys(weatherData).length !== 0 && (
        <>
          <TodayWeather
            description={weatherData.days[0].description}
            tempmax={weatherData.days[0].tempmax}
            tempmin={weatherData.days[0].tempmin}
            wind={meterPerSecondConverter(weatherData.days[0].windspeed)}
          />
          <div className="text-sm sm:text-base">
            <div className="bg-green-100 right-10 sm:right-24 z-10 p-2 relative font-semibold w-full border-2 border-black rounded-lg">
              {`Tomorrow: ${weatherData.days[1].description} `}
              {`Temperature High ${weatherData.days[1].tempmax} `}
              <sup>o</sup>C,
              {` Low ${weatherData.days[1].tempmin} `}
              <sup>o</sup>C.
              {` Wind speed ${meterPerSecondConverter(weatherData.days[1].windspeed)} m/s.`}
            </div>
            <div className="bg-amber-100 right-7 sm:right-[82px] bottom-[88px] sm:bottom-20  p-2 relative font-semibold w-full border-2 border-black rounded-lg">
              {`Tomorrow: ${weatherData.days[1].description} `}
              {`Temperature High ${weatherData.days[1].tempmax} `}
              <sup>o</sup>C,
              {` Low ${weatherData.days[1].tempmin} `}
              <sup>o</sup>C.
              {` Wind speed ${meterPerSecondConverter(weatherData.days[1].windspeed)} m/s.`}
            </div>
          </div>
          <div className="text-sm sm:text-base">
            <div className="bg-amber-100 left-8 sm:left-24 z-10 p-2 relative font-semibold w-full border-2 border-black rounded-lg">
              {`${weatherData.days[2].datetime}: `}
              {`Temperature High ${weatherData.days[2].tempmax} `}
              <sup>o</sup>C,
              {` Low ${weatherData.days[2].tempmin} `}
              <sup>o</sup>C.
              {` Wind speed ${meterPerSecondConverter(weatherData.days[2].windspeed)} m/s.`}
            </div>
            <div className="bg-sky-100 left-11 sm:left-[110px] bottom-12 sm:bottom-14  p-2 relative font-semibold w-full border-2 border-black rounded-lg">
              {`${weatherData.days[2].datetime}: `}
              {`Temperature High ${weatherData.days[2].tempmax} `}
              <sup>o</sup>C,
              {` Low ${weatherData.days[2].tempmin} `}
              <sup>o</sup>C.
              {` Wind speed ${meterPerSecondConverter(weatherData.days[2].windspeed)} m/s.`}
            </div>
          </div>
          <div className="hidden sm:contents ">
            <div className="bg-sky-100 right-24 z-10 p-2 relative font-semibold w-full border-2 border-black rounded-lg">
              {`${weatherData.days[3].datetime}: `}
              {`Temperature High ${weatherData.days[3].tempmax} `}
              <sup>o</sup>C,
              {` Low ${weatherData.days[3].tempmin} `}
              <sup>o</sup>C.
              {` Wind speed ${meterPerSecondConverter(weatherData.days[3].windspeed)} m/s.`}
            </div>
            <div className="bg-rose-100 right-[82px] bottom-14  p-2 relative font-semibold w-full border-2 border-black rounded-lg">
              {`${weatherData.days[3].datetime}: `}
              {`Temperature High ${weatherData.days[3].tempmax} `}
              <sup>o</sup>C,
              {` Low ${weatherData.days[3].tempmin} `}
              <sup>o</sup>C.
              {` Wind speed ${meterPerSecondConverter(weatherData.days[3].windspeed)} m/s.`}
            </div>
          </div>
        </>
      )}

      <div className="mx-auto px-2 sm:px-6 py-4  sm:py-8">
        <button
          onClick={onClickHandler}
          className="font-extrabold border-2 border-black py-2 px-6 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "
        >
          {loading ? <Loading /> : 'Search'}
        </button>
      </div>
      <div className="bg-amber-100 flex -z-10 flex-col text-sm sm:text-base h-full w-full absolute top-8 left-8  border-4 border-black rounded-3xl"></div>
    </div>
  );
}
