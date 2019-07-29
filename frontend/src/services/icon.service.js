const types = {
  cloudy: 'cloud',
  rain: 'cloud-rain',
  'clear-day': 'sun',
  'partly-cloudy-day': 'cloud-sun',
}

export const translateIcon = icon => {
  console.log(icon)
  return types[icon] || 'compass'
}

// weather licons list based on font-awesome

// faSun,
// faMoon,
// faCloudSun,
// faCloudMoon,
// faCloud,
// faCloudRain,
// faCloudShowersHeavy,
// faSnowflake,
// faWind,
// faSmog,
