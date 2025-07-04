##  Your page should display text similar to the following, updating in real-time:

Day: "Monday"
Date: "November 14, 2023"
Time: "15:45:30"

###
      import {useState,useEffect} from "react";
      export default function App() {
      	const days = [
      		'Sunday',
      		'Monday',
      		'Tuesday',
      		'Wednesday',
      		'Thursday',
      		'Friday', 
      		'Saturday'
      	]
      	const months = [
      		"January",
      		"Febuary",
      		"March",
      		"April",
      		"May",
      		"June",
      		"July",
      		"Augest",
      		"September",
      		"October",
      		"November",
      		"December"
      	]
      
      	const [currentTime, setCurrentTime] = useState(new Date());
      	useEffect(() => {
      		// Set up an interval to update the time every second
      		const timerId = setInterval(() => {
      		  setCurrentTime(new Date());
      		}, 1000);
      	
      		// Clean up the interval when the component unmounts
      		return () => clearInterval(timerId);
      	  }, []);
      	return (<>
      	<div id="day">{days[currentTime.getDay()]} </div>
      	<div id="date">
      	{months[currentTime.getMonth()] +" "+ currentTime.getDate()+", "+currentTime.getFullYear()}
      	</div>
      	<div id="time">
      		{currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds()}
      	</div>
      	</>)
      }

###

