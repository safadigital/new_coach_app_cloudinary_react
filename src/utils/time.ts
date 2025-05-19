export const timeToString = ({ time }: { time: number }): string => {
  // Calculate the total time in seconds
  const totalSeconds: any = time.toFixed(0);

  // Calculate hours, minutes, seconds, and milliseconds
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = Math.floor(remainingSeconds % 60);
  const milliseconds = Math.floor(
    (remainingSeconds - Math.floor(remainingSeconds)) * 100
  );

  // Format the time string based on whether hours are zero or not
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  } else {
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
      // :${milliseconds.toString().padStart(2, "0")}`;
  }
};