const getMouseScreenCoordinates = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  // const rect = e.currentTarget.getBoundingClientRect();
  const x = e.pageX;
  const y = e.pageY;

  return { x, y };
};
export default getMouseScreenCoordinates;
