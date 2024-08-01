import React from "react";

type Props = {};

const GreyBubble = (props: Props) => {
  return (
    <svg
      className="bubble-svg fill-current text-[#E1DFE5] w-[248px]"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="-2 -2 460 76"
      preserveAspectRatio="none"
    >
      <path d="m9.59,50.18c0-7.97,0-16.18,0-16.18,0,0,0,0,0,0C9.61,15.27,24.8.07,43.54.06L389.54,0c18.76-.01,33.98,15.19,33.99,33.95.01,18.76-15.19,33.98-33.95,33.99l-345.99.06c-8.47,0-16.22-3.09-22.17-8.22-.04.05-.08.1-.12.15-10.08,11.54-21.3,7.32-21.3,7.32,5.69-1.3,9.59-9.1,9.59-17.07Z"></path>
      <foreignObject x="27" y="5" width="100%" height="100%">
        <p className="bubble-copy bubble-copy-4">
          Only at the Apple&nbsp;Store
        </p>
      </foreignObject>
    </svg>
  );
};

export default GreyBubble;
