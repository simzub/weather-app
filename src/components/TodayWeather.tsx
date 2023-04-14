interface TodayWeatherProps {
  description: string;
  tempmax: string;
  tempmin: string;
  wind: number;
}

export default function TodayWeather(props: TodayWeatherProps) {
  return (
    <div className="bg-white text-center mb-6 sm:mb-10 w-fit items-center border-2 text-sm sm:text-base font-semibold border-black rounded-lg p-2 mx-10 ">
      {`Today: ${props.description} `}
      {`Temperature High ${props.tempmax} `}
      <sup>o</sup>C,
      {` Low ${props.tempmin} `}
      <sup>o</sup>C.
      {` Wind speed ${props.wind} m/s.`}
    </div>
  );
}
