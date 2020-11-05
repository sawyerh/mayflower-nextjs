import "@massds/mayflower-assets/scss/03-organisms/_header-slim.scss";
import HeaderSlim from "@massds/mayflower-react/dist/HeaderSlim";
import SiteLogo from "@massds/mayflower-react/dist/SiteLogo";
import logo from "@massds/mayflower-assets/static/images/logo/stateseal.png";

function MyApp({ Component, pageProps }) {
  const headerProps = {
    siteLogo: (
      <SiteLogo
        url={{
          domain: "/",
        }}
        image={{
          src: logo,
          alt: "Logo alt",
          width: 45,
          height: 45,
        }}
        siteName="Test"
        title="Test title"
      />
    ),
    skipNav: <a href="#main">Skip to main</a>,
  };

  return (
    <>
      <HeaderSlim {...headerProps} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
