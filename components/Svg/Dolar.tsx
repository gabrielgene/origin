import * as React from 'react';

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#CBD5DC">
      <path d="M12 0a1 1 0 0 1 1 1v22a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" />
      <path d="M6.318 5.318A4.5 4.5 0 0 1 9.5 4H17a1 1 0 1 1 0 2H9.5a2.5 2.5 0 1 0 0 5h5a4.5 4.5 0 1 1 0 9H6a1 1 0 1 1 0-2h8.5a2.5 2.5 0 0 0 0-5h-5a4.5 4.5 0 0 1-3.182-7.682Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
