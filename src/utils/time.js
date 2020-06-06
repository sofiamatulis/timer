const formatSeconds = (seconds) => {
  if (seconds.toString().length === 1) {
    return seconds.toString().padStart(2, '0')
  }
  return seconds
} 

const convertSecondsToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;
  if (seconds < 60) {
    return `0:${formatSeconds(seconds)}`
  } else if (seconds >= 60) {
    return `${minutes}:${formatSeconds(remainingSeconds)}`
  } else {
    return '0:00'
  }
}

const convertMinutesToSeconds = (minutes) => {
  return  parseInt(minutes) * 60 
}


export {
  convertSecondsToMinutes,
  convertMinutesToSeconds
}