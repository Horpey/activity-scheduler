"use client";
import { useState, useEffect } from "react";
import "whatwg-fetch";

async function fetchWeatherData() {
  const appId = "439d4b804bc8187953eb36d2a8c26a02";
  const coordinates = {
    Berlin: { lat: 52.5244, lon: 13.4105 },
  };
  const url = `https://openweathermap.org/data/2.5/onecall?lat=${coordinates?.Berlin?.lat}&lon=${coordinates?.Berlin?.lon}&units=metric&appid=${appId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function WeatherWidget() {
  const [datetime, setDatetime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({
    current: 0,
    humidity: 0,
    dew_point: 0,
    feels_like: 0,
    description: "",
    hourly: [
      {
        time: "",
        temp: 0,
      },
    ],
  });

  const setTime = () => {
    setDatetime(
      new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  };

  useEffect(() => {
    fetchWeatherData().then((data) => {
      const hourlyData = [];
      for (let i = 0; i < 6; i++) {
        hourlyData.push({
          time: new Date(data?.hourly[i]?.dt * 1000).toLocaleTimeString(
            "en-US",
            {
              hour: "numeric",
              hour12: true,
            }
          ),

          temp: Math.round(data?.hourly[i]?.temp),
        });
      }

      setWeatherData({
        current: Math.round(data?.current?.temp),
        humidity: data?.current?.humidity,
        dew_point: Math.round(data?.current?.dew_point),
        feels_like: Math.round(data?.current?.feels_like),
        description: data?.current?.weather[0]?.description,
        hourly: hourlyData,
      });

      setTime();

      setInterval(() => {
        setTime();
      }, 5000);

      setIsLoading(false);
    });
  }, []);

  return (
    <div className="bg-gray-50 p-5 rounded-md min-h-[209px]">
      {isLoading ? (
        <p>Weather Data Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <p className="font-bold">Berlin, Germany</p>
              <p className="text-xs">{datetime}</p>

              <p className="text-xs mt-5">
                Feels like {weatherData?.feels_like}°{" "}
                <span className="capitalize">{weatherData?.description}</span>
              </p>
            </div>
            <div className="col-span-4">
              <p className="text-4xl">{weatherData?.current}°</p>

              <p className="text-xs mt-5 space-x-2">
                <span>H: {weatherData?.humidity}%</span>
                <span>DP: {weatherData?.dew_point}°</span>
              </p>
            </div>
          </div>

          <div className="mt-3 border-t pt-3 border-gray-200">
            <div className="grid grid-cols-6 space-x-2">
              {weatherData?.hourly.map((weather, index) => (
                <div key={index}>
                  <p className="text-sm">{weather?.time}</p>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 744 448"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M707.7 411.7C696.224 423.243 682.573 432.394 667.536 438.625C652.5 444.856 636.376 448.043 620.1 448H123.9C90.7999 448 59.6999 435.1 36.2999 411.7C24.7555 400.205 15.6036 386.536 9.37298 371.483C3.14239 356.43 -0.0433167 340.291 -5.34807e-05 324C-5.34807e-05 296 9.09994 269.7 26.1999 247.7C42.9457 226.388 66.1315 211.059 92.2999 204L130.2 194.1L144.1 157.5C152.7 134.7 164.7 113.4 179.8 94.1C194.707 74.9708 212.365 58.155 232.2 44.2C273.3 15.3 321.7 0 372.2 0C422.7 0 471.1 15.3 512.2 44.2C532.1 58.2 549.7 75 564.6 94.1C579.7 113.4 591.7 134.8 600.3 157.5L614.1 194L651.9 204C706.2 218.5 744 267.8 744 324C744 357.1 731.1 388.3 707.7 411.7Z"
                      fill="#E7E7E7"
                    />
                  </svg>

                  <p>{weather?.temp}°</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherWidget;
