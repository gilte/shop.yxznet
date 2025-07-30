import type { SVGProps } from "react";

export function KiwiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15.51 4.29C14.13 3.12 12.19 3 10.5 4c-1.69 1-2.5 3-2.22 4.65.28 1.65 1.65 2.89 3.22 2.89.98 0 1.89-.43 2.5-1.12" />
      <path d="M15.51 4.29c.81 1.03 1.15 2.5 1.05 3.95-.1 1.45-.83 2.7-1.89 3.43" />
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.29" />
      <path d="M7 15c-2 1.39-3 3.3-3 5.29A7 7 0 0 0 12 22" />
      <path d="M12 11.5v.5" />
      <path d="M15.5 9.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
      <path d="M10 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
      <path d="M8.5 12a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
    </svg>
  );
}
