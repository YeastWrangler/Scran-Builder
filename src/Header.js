import { BsFillArrowRightCircleFill } from "react-icons/bs";
import scranBuilderLogo from "./scran-builder-logo.svg";

const Header = () => {
  return (
    <>
      <img className="logo" src={scranBuilderLogo} alt="scran builder" />
      <h1 className="header-text">Add your ingredients</h1>
      <div className="mobile-link">
        <p>You can easily see your previous recipes whenever you want to.</p>
        <p className="app-button">
          <a href="www.google.co.uk" className="icon-arrow">
            <BsFillArrowRightCircleFill />
          </a>
          Get the app
        </p>
      </div>
    </>
  );
};

export default Header;
