// import { useEffect, useState } from "react";
import "./App.css";

const BackToTop = () => {
  // The back-to-top button is hidden at the beginning
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     });
//   }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      {/* {showButton && ( */}
        <p onClick={scrollToTop} className="back-to-top">
          back to top
        </p>
      {/* )} */}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
};

export default BackToTop;