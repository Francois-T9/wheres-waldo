const convertTime = (counter: number) => {
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor((counter % 3600) / 60);
  const secs = counter % 60;

  return { hours, minutes, secs };
};

export default convertTime;
