import React from 'react';

const Home = () => {
  const homeData = {
    title: 'Math magicians',
    subHeading: 'Welcome to this page!',
    description:
      (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque quam tellus, lobortis in neque id, consectetur mollis nisi.
            Integer dictum, augue eget volutpat cursus, tellus arcu semper libero,
            at eleifend risus magna sed neque. In hac habitasse platea dictumst.
            Vivamus est risus, auctor pulvinar egestas et, venenatis at lacus.
            Donec placerat enim luctus, feugiat mauris sit amet, dapibus mi.
            Aliquam a augue id urna porta tincidunt. Nunc dapibus, eros nec
            pellentesque tristique, nulla nunc malesuada enim, sed consequat quam
            lorem nec orci. Ut magna nisl, venenatis feugiat fringilla vel, mattis
            ac purus. Nam at sem eget augue scelerisque viverra vitae at metus.
            Vestibulum elit tortor, convallis sed turpis a, feugiat pellentesque urna.
            Etiam consectetur faucibus tincidunt. Nullam ornare faucibus nibh at sollicitudin.
            Aliquam tincidunt ligula in orci venenatis, at facilisis urna molestie.
          </p>
          <p>
            Donec placerat enim luctus, feugiat mauris sit amet, dapibus mi.
            Aliquam a augue id urna porta tincidunt. Nunc dapibus, eros nec
            pellentesque tristique, nulla nunc malesuada enim, sed consequat quam
            lorem nec orci. Ut magna nisl, venenatis feugiat fringilla vel, mattis
            ac purus. Nam at sem eget augue scelerisque viverra vitae at metus.
            Vestibulum elit tortor, convallis sed turpis a, feugiat pellentesque urna.
            Etiam consectetur faucibus tincidunt. Nullam ornare faucibus nibh at sollicitudin.
            Aliquam tincidunt ligula in orci venenatis, at facilisis urna molestie.
          </p>
        </>
      ),
  };

  const Page = () => {
    const { title, subHeading, description } = homeData;
    return (
      <>
        <div className="col">
          <h1>{title}</h1>
          <h2>{subHeading}</h2>
          <div>{description}</div>
        </div>
      </>
    );
  };
  return (
    <Page />
  );
};

export default Home;
