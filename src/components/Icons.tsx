import { LucideProps } from "lucide-react";

// export const Icons = {
//   logo: (props: LucideProps) => (
//     <svg {...props} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
//       <g>
//         <ellipse cx="256" cy="256" rx="200" ry="180" fill="#4F46E5"></ellipse>
//         <path
//           d="M150 150c30 30 100 30 130 0s30-100 0-130-100-30-130 0-30 100 0 130z"
//           fill="#60a5fa"
//         ></path>
//         <path
//           d="M362 150c-30 30-100 30-130 0s-30-100 0-130 100-30 130 0 30 100 0 130z"
//           fill="#60a5fa"
//         ></path>
//         <path
//           d="M256 330c-66.27 0-120 53.73-120 120s53.73 120 120 120 120-53.73 120-120-53.73-120-120-120z"
//           fill="#93C5FD"
//         ></path>
//         <path
//           d="M194.75 284.25c0-20.4 16.55-37 37-37h48.5c20.4 0 37 16.6 37 37v18.5c0 20.4-16.6 37-37 37h-48.5c-20.4 0-37-16.6-37-37v-18.5z"
//           fill="#FFFFFF"
//         ></path>
//         <path
//           d="M286.25 246.75c0-20.4-16.55-37-37-37h-48.5c-20.4 0-37 16.6-37 37v18.5c0 20.4 16.6 37 37 37h48.5c20.4 0 37-16.6 37-37v-18.5z"
//           fill="#FFFFFF"
//         ></path>
//         <circle cx="200" cy="150" r="30" fill="#60a5fa"></circle>
//         <circle cx="312" cy="150" r="30" fill="#60a5fa"></circle>
//       </g>
//     </svg>
//   ),
// };

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      {...props}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      {/* Dragon Head */}
      <path
        d="M250,60c-30,0-50,20-60,40s-10,40,0,50,30,10,40,0,20-30,30-40,10-50-10-50z"
        fill="#60a5fa"
      />
      {/* Dragon Body */}
      <path
        d="M150,150c0,60,60,100,100,100s100-40,100-100c0-50-30-90-70-90S150,100,150,150z"
        fill="#558ce7"
      />
      {/* Dragon Wings */}
      <path
        d="M100,200c0,20,10,40,30,40s30-20,30-40-10-40-30-40S100,180,100,200z"
        fill="#87befb"
      />
      <path
        d="M400,200c0,20-10,40-30,40s-30-20-30-40,10-40,30-40S400,180,400,200z"
        fill="#87befb"
      />
      {/* Dragon Tail */}
      <path
        d="M250,300c-30,0-50,30-50,50s30,50,50,50,50-30,50-50S280,300,250,300z"
        fill="#60a5fa"
      />
      {/* Dragon Eyes */}
      <circle cx="230" cy="120" r="8" fill="#222" />
      <circle cx="270" cy="120" r="8" fill="#222" />
      {/* Dragon Claws */}
      <path
        d="M190,180c0,10,10,20,20,20s20-10,20-20-10-20-20-20S190,170,190,180z"
        fill="#558ce7"
      />
      <path
        d="M310,180c0,10-10,20-20,20s-20-10-20-20,10-20,20-20S310,170,310,180z"
        fill="#558ce7"
      />
      {/* Additional Details */}
      <path
        d="M250,350c-10,0-20,10-20,20s10,20,20,20,20-10,20-20S260,350,250,350z"
        fill="#222"
      />
      <path
        d="M150,300c10,10,30,10,40,0s10-30,0-40-30-10-40,0S140,290,150,300z"
        fill="#60a5fa"
      />
    </svg>
  ),
};
