// Single digits to return double digits (00, 01, 02,... 10)
const formatDoubleDigits = (number) => {
  if (number.toString().length === 1) {
    return number.toString().padStart(2, '0')
  }
  return number.toString()
} 

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds - minutes * 60;
  if (seconds < 60) {
    return `0:${formatDoubleDigits(seconds)}`
  } else if (seconds >= 60) {
    return `${minutes}:${formatDoubleDigits(remainingSeconds)}`
  } else {
    return '0:00'
  }
}

const convertMinutesToSeconds = (minutes) => {
  return  parseInt(minutes) * 60 
}

export {
  formatTime,
  convertMinutesToSeconds,
  formatDoubleDigits
}