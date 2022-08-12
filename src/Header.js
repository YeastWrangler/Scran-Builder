import { BsFillArrowRightCircleFill } from "react-icons/bs";
import scranBuilderLogo from "./scran-builder-logo.svg";

const Header = () => {
  return (
    <>
      <img class="logo" src={scranBuilderLogo} alt="scran builder" />
      <h1 class="header-text">Add your ingredients</h1>
      <div class="mobile-link">
        <p>You can easily see your previous recipes whenever you want to.</p>
        <p class="app-button">
          <a href="www.google.co.uk" class="icon-arrow">
            <BsFillArrowRightCircleFill />
          </a>
          Get the app
        </p>
      </div>
    </>
  );
};

export default Header;
