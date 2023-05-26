const weatherUrl = 'https://yr.no/api/weather' // Assume this responds 

async function isWeatherNice() {
  const response = await fetch(weatherUrl)
  const data = response.json()
  if (data.temperature > 18) {
    return true
  } else {
    return false
  }
}

// You're only going swimming if the weather is nice, friends aren't busy and you've got time
function goingSwimmingToday(gotTime, areFriendsBusy){
  // Implement this function
}


const amIGoing = goingSwimmingToday(true, false)

console.log("Going swimming today?", amIGoing)
