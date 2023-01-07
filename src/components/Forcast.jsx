import React from "react";
import swal from "sweetalert";
import { WeatherIcons } from "../App";


export default function Forcast({weather}) {
  
    return (
        <div>
    {weather !== {} ? (
    <div className="flex flex-col gap-5 mt-5 ">
        <div className="flex flex-col rounded-md shadow-md py-4 gap-3 justify-center items-center text-center   text-white bg-slate-700">
          <h1 className="text-lg">{new Date().toLocaleTimeString()}</h1>
          <img className="w-32 " src={process.env.PUBLIC_URL+WeatherIcons[weather?.weather[0].icon]} alt="mah" />
          {console.log(process.env.PUBLIC_URL+WeatherIcons[weather?.weather[0].icon])}
          {console.log(weather)}
          <h1 className="text-5xl">{Math.floor( weather.main.temp - 273.15) }°c</h1>
          <h3 className="text-3xl">{weather.name},{weather.sys.country}</h3>
          <h3 className="text-lg">{weather.weather[0].description}</h3>
        </div>
        <div className="flex flex-row  gap-5 justify-center flex-wrap">
          <div className="text-center flex flex-col py-3 gap-4 shadow-md  text-white bg-slate-700 max_width justify-center items-center rounded-md">
            <h2 className="text-xl">{Math.floor( weather.main.temp_min - 273.15)}°c</h2>
            <img className="w-10 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAECklEQVRIicWXUUwcRRjH/zOzd7t3yHHFssdxBaSgphSNLcaAtNrUYBOFoD7w3BitSEJNLdZWWqEm1hREo42B8CA8mqY+WAqmwZYgXtsY5aVKQ4lp5DgSDpV62t7e3TLjQ7kTbq97S63pP5lk5/tmvt+3385uvgXukUg646HOvjq7onTHY/oDdpvtWiQW3X/8rVeG/lfwoc6+OkVxfFG7oypLzVuP+dBv+Gbs0g1N0xo/OPDq8FoBB/r8zUJAdL1W07PSTlMXyorcXbujKsvn9cAmMWwo8OCZp6uyZEXuXiu0tddfTcE6GWFdrb3+alNwNK6XetW8VTafJw+xWLxsLdCWT4dlidKTj20tdW55vMwpUfLlvo8uOBJ+KXWD4IJRdiufnoGTK12GtWbKktcdUT3u3IIN6wkAzKq57gWy2AbgcMZgr+9uTF6nJGFBonnT5mJnYraposixcO6P5gTYUOq7JUFAGGPJOWMUgvx7mE3veC13ebDnwstLDOja8+TnAEAJHZj48eqeLZUPOgFg4ofpmwDptwS2Wur9vd+WE0I+YbeuL3U3PTUp52S/vbj4F86PTOwGABA64HC7DloCW1FH/6gSiUmD5Y+WOACQy5evnenoHy3vaNysAdi3PAwygCcXvWj5eDzNUm9asBZ3vOte5/QWlXgYARAMLngWf8cRAG1mCac9XNu31xhGOrWeGCsBwd7KJx52JE7N1sqHnITgjdYTYyVrBluVJMsdG0vz7YpiT9oUhx0by7x2SbG3m+41c46P+03BQvCGomKPLdVeWOyx/TI998Idg1eWOF0SQgiZUmPRKKXgXNgNjpVrzJyZxBgbD8yE9FR74NeQzhg7b7b3P5V6Ka63TF8JfA/AWVikSmIZOj01e0NESdMdgzOVurN529Sbn41VTF8N9k5dmdkJAJSycyJKmjr3Vs2axV7VCNQfHt5JQc5uq6k2JPSd/6Iu+NKzp4/VjZoFTNXtGoEkuKHtbCEhfLLikYr7clzZhgDhP8P46efJvzkn5V+9vytgBdra66+WKBsBAJ0v1X7YVHMx4UseLkb5ez6fT0kHBQBXjgsFPq/MmDhqBZqpEUiCBUh9fr5q+sw9qmrjQtRbAa9sBLwF95M8NdctZ5PkZzQJ5pzn2O2mrx5kWYbgwm0FnK4RABfNBjClJByLxUxDRaNRUEqvW8JmaASSYELYUCgUipsFm59f0AnFGSvg5UbgZiQSRSQSvX0jEOda+2xg7kW3221zuVyGQOFwGHPBoKbHddOPf0KZGoFV73HDO1/vopSc8vkKFNWjSopih6bFMD8f0oPBoMY5f+n0sedHrIAzyfAn8VzbULHMpKMQoo4vcTdl9DqhGIxr8fbB4/UzdwN6T/UPLGR1M4nCyDgAAAAASUVORK5CYII="></img>
            <p>lowest temperature</p>
          </div>
          <div className="text-center flex flex-col py-3 gap-4 shadow-md  text-white bg-slate-700 max_width justify-center items-center rounded-md">
            <h2 className="text-xl">{Math.floor( weather.main.temp_max - 273.15)}°c</h2>
            <img className="w-10 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAC4klEQVRYhe2YzU8TQRiHfzPtbtttEFoSSYMJktBAouBHgMS/AImAFzFpuHAjfpw9eJGTJxO9wIErkNKQcBAaohePGmOiohhUTCQYippQC3ah3Z0ZT5gibZnZmlINz22z87777Ly/7GYXqHCI08KpmXiPput3bGa3EQJBqfuNxdhw5PLF+KELTs8+vkcoudEYbvFWB4IAgB/JJFY+vU8z2x692tt169AEp2biPW6PPt3WfsHr1rQ952zLwsKLpzuWza78rZ10qxa4dM9wY7h5nxwAuDUNJ8Mt3s8floYB/BZ8GYmIfL3ORaMHbpCyIGf26d2x5qM6EARjrFVVpBBUtUAI7qGuwvflcrkhBPc4FfoTZcFyozxiJ5Q1g04oawbLTcULHmVQVqQQ/9+Im2PjSMXGi69xrLMfRyNuaWoqen5peXnPcd/teN4MPrx7qTIyKCNSiIrPYMULlmXERxk8TCpeUGnEH7u7PT8V1obn5zNAaRmUzsaTwUFv0LIeGT5fx4lQyFds7ZdEYts0zedGMtm1K+kU6REHLOuBYRgd9QfIAUB9KOTzGUanWVt7vxQ5QHIHFwYGWgUhz5oaGgxK5e6JM4bllRVTcN55NhpddCoodTUODAWqqzVZOQCgLheCNTU6pXTIqRwgKUgJ6T3m9+//Uj+AKr/fLYA+da2ca8ssEpwf13Rdubmm64AQdcqFOcgJCuHoTSBE3qeLElKChNLvVjar3NzOZgFKvykX5iCXeiHmttJpptp8K51mEGJO2SoHOUHGRpKpVIZxLt2YcY6Nzc0MA0acygGSgmdisbdciKnE+rop23htfd0kwMT5ycl3zvUU3iRaNnttO5NZWF1bM4vtJOMcq4mEubO9/TprGDdLkQMU/7Au9vfrtqaNCEIGamtq9CrDcGm6DhACK5PBlmmyjVQqQ4CJrGHcbB8bs8oquMurSOQUofQ6IaSHc14HAITSr4LzWU7IaKlj/af4BbbDEbjUr7lsAAAAAElFTkSuQmCC"></img>
            <p>highest temperature</p>
          </div>
          <div className="text-center flex flex-col py-3 gap-4 shadow-md  text-white bg-slate-700 max_width justify-center items-center rounded-md">
            <h2 className="text-xl">{weather.main.humidity}%</h2>
            <img className="w-10 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAADGElEQVRYhe2WvVPTYBzHv0+e0LRJ08DJS6HFOw8ZWBhc/BNQ5DwGr5t6p4Obg6J3Dhy4OFBgkH/ATe1Oi/+DC8fSUzzgAKmVlwYj15AmjwO015a2NkkbFr5j8/bpL58nzxe4ShsTT6kLjDFymQxcvQPzyaNJgL2YTx1NeAlUnZqAiQSjHCVLkbAAytOlRIJRr8GKqQm4q6hPgyLfFe33QxRo96ace9gugP9pdAFwMbEdYCDvBiN+CQAiA4JEKRd/n2RCq+Ga0egCoBkKPZOD1CeJZ29VkXkE/FQ0qPqklXDNasRVX0Q5vIn0++Xy3wf7BZEQMtNKF5vVqAJwM6g+kAJcIChWcigyD7/ASVty7n4r4OxoVAHI82RmoK9yesVEwkKQ58lsKwDtaFQCjC+rtzmC6yGZr3nTrlAHCCM351Zyt9zA2dWoBMjxeBzuEfyk3oInQG+Pz8dz5JEbQLsalQAJMCEH+YaLQJF5HsCkG0C7GpUALSAsiXV3PgCAJFJYDANO4ZxoVD5BzSiwhg8wDAYCaE4BnWjElR1c2T8wCo0esH9kFMAh6RTQiUYlQLPApn9m87p2Yta8UPtrYu9XPm9ZbNopoBONSme/Hu/8AYvE0t81bSejG3ndgsUAXbewu6cb6XVNs0Bir8Y6N5wCOtGo4u+8vKskTWA0k9U/raW1w6+rqrmW1g4yWf2jCYxOjSkpp3DnhLY1amlbjqfUhak7oSlCSM0xzSVzQ5RidWQ4KFV/B4EzjdLrmmYCo8U31VgIG2mmOjnRqCUTTCQY3VHUzXCvEM38Pt2K5kJDsRipvdoAxL/kblBC3jKGe4wxhSMkR4DlAthsteO1v5g2U16djo/NYnX6UO/8c4imtkzXE1xMbAeghLZHhqVrkkih/ing28bJfkchFH0+TnS393ftYLsbuCtALxq4K0AvGrgrQC8auGNArxq4Y0CvGrhjQK8auGNALxo44G6CbW/ggJtV7EEDB1wAetHAAZd78UJKHScc+xzu8wvdXR0dPh8H49TC/qFh7GXzugUSc1tyXZcFO9XpKpeRf6LeqMXhVqDpAAAAAElFTkSuQmCC"></img>
            <p>humidity</p>
          </div>
        </div>
        <div className="flex flex-row justify-center  gap-6 flex-wrap">
      <div className="  text-white bg-slate-700 rounded-md flex flex-col shadow-md gap-4 min_w text-center items-center">
        <h4>visibility</h4>
        <img className="w-10 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAADoElEQVRYhe2Wy09cdRTHv+fcx8wd7sB0YGaotYRoKVYeqcsaKWFnigUfiaF2UY0LU01M/EsaY9BuNHHXYkQppFtawLjRheCUpqiUptiWN2Xmzr0zc3/HBcYHdUY6FIbFfJb3l3PuJ+fcc+4P2OfQ4wZ8M5o8rut0hgm9SqHeh4SZKE2EexAZUaK+7D3ZNrnngoPj00cNqH4iOlEbsc3qsGUETB26xvCVgpfN42HK9RdXNjwBfvBzdO61rmO390RwaGyqm8CX6uMRKx61NaLCYSKChZUN//7SQwfiv9XT0Tayq4JDY1PdzDzwbEMiVGWZ206ccbOYmVtI+6LOvNrROrwrgoPj00d1UT8eaUzYjyP3T8lbtxc2csgff6Oj/bdSBLnYoQHVXx+PWKXIAYAVNHEwVhMySL9YUgIUERy6nnyBiE7Eo7ZWanIAiEVtjYEXv70+2VZKfEFBZuqrPWCbxQZiOxARaiO2CfDZkuILHQxP3Lj5zOFYsx0KlG73J2nHw625hRyJKGEijWhW+fjMSBsXT51q8koTHLuxdqzpYI2h76jDADZXj+PmYAWMTWHXw4OljbST8e4pcGfvS8/9Xii2YIuViK1rRWdo2xARqiwTzARmQjgUxJGGWFWitrqRSV0bSCYLTqG+9cGViWQLgT5QvmKlBJq2s2+wGIm6aj2V9p6SZfc9AJ8UFbx6dSbgh7OfAuiL1YYDETtE2hOqYDHideGq9Lx7vpAgAcDo6GwwZWSu2VagvfHpOot596q2FSUKkzfnFTNmxZevNEUfd3e13P+X4PD49BfhKrOv8XDM2ju1vxERZDI5LK+n3JV1Jw8l7/Z0tgwAAA2NTbUza9+3Nh0K7WXlCpFxs5i5s+BIXt7p6WwZYI21D+PRcGA/yAGbv8emhkQIRJ8PfvdTnAX0ck21tfNl9wSxggYOREK6ntc+Yl9ULGAa5XZ6hLoaO8ia9iaTgkDKrfMowaABpdQhZsail82V26cQwopoZC2V8cttspWMmwUzzbOfQ//i8oan1P7q8/J62lOQy/x61/M/Q+TS7N0lZ78oZtwcVtecHOX0CwwAmSjOpx1v8tc7i47vq7LL/TL3wAHU26e7mpf+2s4DyaRprVK/AGfj0bAZCYc009Sh7cEC95XAdbNYXk97q2upPIBzPSdbvwb+48J6ZSLZAl/eJ41eEYWEEtn5lfp/YCKPGHcFuEw5/cLprual3X5nhQoVKlSoUGF7/AFIFmWhjgkuAgAAAABJRU5ErkJggg=="></img>
        <p>{weather.visibility/ 1000} km</p>
      </div>
      
      <div className="  text-white bg-slate-700 rounded-md flex flex-col shadow-md gap-4 min_w text-center items-center">
        <h4>sunrise</h4>
        <img className="w-10 " src="data:image/png;base64,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"></img>
        <p>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
      </div>
      <div className="  text-white bg-slate-700 rounded-md flex flex-col shadow-md gap-4 min_w text-center items-center">
        <h4>sunset</h4>
        <img alt="mk"className="w-10 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADe0lEQVRoge2ZTWhcVRiGn3fuHbFasUhN/HeThba1pQVxIaIgQgVRiR1/CoUaBFsRF4rprgaLCKKmIm00Ki4aEkk1bXf+NFqXQqumtIq2K2kpSRo1tAqduZPPRYOUe8/k3jOZe1sxz/I759zzfHPm3DnfGVhggf83atWD7FOWA/dj3AvcCFwHXDs7ywTGOMYJxLeIr7WOo62Yd14J2CBLKbMJ2MR5aR9OYvQR8p46mWrWoakEbA9LqLMNowu4otnJZ/kb+BBjqx5n2newdwI2zFpK9GPc7Ds2hVPAZlXY5zMocwLWQ4nl9AIv+Jp5sp2jvKQeZrJ0zpSAfUPIFB9gbJyfW0bEIFNs1LPU0rumYMMEiBHg4ZbIZcXYy088lrYSpdQHiVcpWv78vI+yglfSu82B7eYhYB9ZEs0HQ3RqHXsbdWiYgA2zGHEcaM9FLTsTXEaHHuGMq7HxJyu2cPHlAdqo8mKjRucK2GdczwzHgCtz0/LjLDU6tJ7xeIN7Bep0cenIAywm5GlXQ6Ov0JM5yjSHeMoVTiRgn3A7YkX+Rt6stJGkVxgPRMfXPghWjJInZvYAfHnkwlhyBWBNcUqeSKvjoUQCwu4oxsYfwcp4zLWJ2wpwaQ7NVngX4EpgSQEqzWFcEw8lNrEmL6eFpXKrSZxMHSug34swaQ79EY84NrFOFyPjj2QJN8dr1A4Xo+OPmcbiMddr9PtidPyR7Id4LPlLPHH1aEmZ6unCqQfaH485Xze19Rt+BrstfyUvfikPDiSc3KdRMZy7jj9DrqAzgXAmehc4m6uOH3+FtfJOV4MzAQ0Nncb0fr5OXvRp98eTrobEJv63YXLRthpBRXBLfl6ZOBkG1dcbNTYs6rW/f1oqdXFxiwPD9Iy++Kjh6WDO+57yVztGEb2t98qI6e3y6M7P5+qSemEV3t3+shkDrbPKhsGu8J627rR+2S53K5Wg9ufSAVlhxf5IGLU/oQM9UVrH7NfrlUoQ/Xrra0Jb5ueWSn8QTj+vQ/2pN9PQxME/WtXdCdZH6yu3cbDN4dibe3wGeV/ahmNvjATnwmUm3gGqvuMdVA16gyha5isP8/2Tb3X3DVGd54RtQJ6/F8ZvhnaF5eoOHdp+qlmHltSOBqqt6r4zkN1nZndJ6jDjJuCq2S5nJE6YcUzSd3XqB8o/vnVQl+oF1AIL/If4B0gP6qnCWHniAAAAAElFTkSuQmCC"></img>
        <p>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
      <div className="  text-white bg-slate-700 rounded-md flex flex-col shadow-md gap-4 min_w text-center items-center">
      <h4 >wind flow</h4>
            <img className="w-10 " src="data:image/png;base64,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"></img>
            <p>{Math.floor((weather.wind.speed* 18) / 5)} km/hr</p>
      </div>
      <div className="  text-white bg-slate-700 rounded-md flex flex-col shadow-md gap-4 min_w text-center items-center">
      <h4 >pressure</h4>
            <img className="w-10 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC7UlEQVRoge2ZzUtUYRSHn3MZxT7MCscM3BTEaCoS7awW6aKFLgJL2tQqaN2+ZX9A/0DrZCQssl1ZUUIJ7vIriQLBj5lKpUTT5p4WMxNq931n7u31QjDPZu6dec575sf9ONwZqFChwn+NlCM1D2RGAZ2+1nA+Dm9weGQU6CzuK4z293YFuolSXz71OFvLunYCP2L0/O07AudMYskAiZ96LJffzMTlXe3tulDcHhweUdt6nu1DgJxqBwDChzi9cikZAC2ei/I2Vq9MSgdAevIvvIzXKw9rgOb0YjuQApamqX8TlxcG+xHISR+AqAzRL7nYvBDYA0i+oYo/FKsXAuNtNJXOpvC1DfTbgdWGF3F5ADdv39kxyGyYj4CvVwBE5dH4LdmKzQNUdw4yG8YjINAHgMdD2wKuPYD79+7+GWSXurvCD7JUevEEcEZhxZPkM1Oxay8KgQHE93oABH060S+bpmLXXhSCrwHV/AUk3itrtWsvAsEBhA4AX/0xa7VrLwKmu1AjQJVXM1ei3rUXGkMAqQWoWT703V7u2guP6Ta6AiRXjyweBrKWetce4GaQfQUQv6q+RL1rD3AwyET5ogIJ8ZPAlKnYtVfknwcZyGcAfE7ZW7n2whMYQD2dBFDR07Zi114UggOoPwmAiP2LOfaiEBgg4XkT+ca02opde1EIDDBB8hOwIdDUms4cNBW79qIQfBHnH/dmAckhKWO1ay8C5ucBZUqFdlW/BRiPywNHT2SKTgEI0mJbwLUHjp7IVLxZQUE5aW3m2AMngwwQ5vOdOW7t5toLifkUyslCobG1oWsvLMYA1eSWC5t1tgVce2ExBtjwE+uFzX22BVx7YTEGqFs7WlZD115YAgM0D2TG1uqyxV8PqpoHMtryYOndXntRCLyNbm36vVXV3nOgrfDWDL+8y3vtFdn9H5mNwCPw8UZjZmvT7wbeAzOyJRenricX9trbxq5BJq/LCfMXZ5/M729Kz5U8Z117FSpUKJ/fDj0Fjo3egqYAAAAASUVORK5CYII="></img>
            <p>{weather.main.pressure}hPa</p>
      </div>
        </div>
    </div>):
  (swal("Oh god ","seems it's not working ","warning",{
    button: "got it",
  }))}</div>
  );
    
};