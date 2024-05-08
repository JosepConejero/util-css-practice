export const PracticeLeft = () => {
  const clickHandle = (event: any) => {
    if (event.button === 0) {
      console.log(event);
    }
  };
  return <section className="section section-left" onClick={(event) => clickHandle(event)}></section>;
};
