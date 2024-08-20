import React, { ReactElement, SVGProps } from 'react';

export const LeftArrowIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="m14 7l-5 5l5 5"/>
    </svg>
);

export const RightArrowIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
              d="m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5"/>
    </svg>
);

export const DashboardIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd">
            <path
                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
            <path fill="currentColor"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m1 2.062V5a1 1 0 0 1-1.993.117L11 5v-.938a8.005 8.005 0 0 0-6.902 6.68L4.062 11H5a1 1 0 0 1 .117 1.993L5 13h-.938a8.001 8.001 0 0 0 15.84.25l.036-.25H19a1 1 0 0 1-.117-1.993L19 11h.938a7.976 7.976 0 0 0-2.241-4.617l-2.424 4.759l-.155.294l-.31.61c-.37.72-.772 1.454-1.323 2.005c-.972.971-2.588 1.089-3.606.07c-1.019-1.018-.901-2.634.07-3.606c.472-.472 1.078-.835 1.696-1.162l.919-.471l.849-.444l4.203-2.135A7.976 7.976 0 0 0 13 4.062m.162 6.776l-.21.112l-.216.113c-.402.209-.822.426-1.172.698l-.201.17l-.073.084c-.193.26-.135.554.003.692c.138.138.432.196.692.003l.086-.074l.168-.2c.217-.28.4-.605.571-.93l.127-.242c.075-.146.15-.29.225-.426"/>
        </g>
    </svg>
);

export const OrderIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="14" height="17" x="5" y="4" rx="2"/>
            <path strokeLinecap="round" d="M9 9h6m-6 4h6m-6 4h4"/>
        </g>
    </svg>
);

export const RDVIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <path fill="currentColor"
              d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"/>
    </svg>
);

export const PatientIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor"
              d="M12 10c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m6.39 8.56C16.71 11.7 14.53 11 12 11s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 15.22V22h2v-6.78c0-.38.2-.72.5-.88C7.71 13.73 9.63 13 12 13c.76 0 1.47.07 2.13.2l-1.55 3.3H9.75C8.23 16.5 7 17.73 7 19.25S8.23 22 9.75 22H18c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66M10.94 20H9.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.89zM18 20h-4.85l2.94-6.27c.54.2 1.01.41 1.41.61c.3.16.5.5.5.88z"/>
    </svg>
);

export const InactivePointIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 100 100">
        <path fill="currentColor"
              d="M50 37.45c-6.89 0-12.55 5.66-12.55 12.549c0 6.89 5.66 12.55 12.55 12.55c6.655 0 12.112-5.294 12.48-11.862a3.5 3.5 0 0 0 .07-.688a3.5 3.5 0 0 0-.07-.691C62.11 42.74 56.653 37.45 50 37.45m0 7c3.107 0 5.55 2.442 5.55 5.549s-2.443 5.55-5.55 5.55c-3.107 0-5.55-2.443-5.55-5.55c0-3.107 2.443-5.549 5.55-5.549"
              color="currentColor"/>
    </svg>
);

export const DownArrowIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="m7 10l5 5m0 0l5-5"/>
    </svg>
);

export const ErrorIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor"
              d="M12 16.462q.262 0 .438-.177q.177-.177.177-.439q0-.261-.177-.438q-.176-.177-.438-.177t-.438.177q-.177.177-.177.438q0 .262.177.439q.176.177.438.177m-.5-3.308h1v-6h-1zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"/>
    </svg>
);

export const WarningIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
        <path fill="currentColor"
              d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/>
    </svg>
);

export const InfoIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor"
              d="M11.5 16.5h1V11h-1zm.5-6.923q.262 0 .438-.177q.177-.177.177-.438q0-.262-.177-.439q-.176-.177-.438-.177t-.438.177q-.177.177-.177.439q0 .261.177.438q.176.177.438.177M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"/>
    </svg>
);

export const SuccessIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
        <path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14"
              className="clr-i-outline clr-i-outline-path-1"/>
        <path fill="currentColor"
              d="M28 12.1a1 1 0 0 0-1.41 0l-11.1 11.05l-6-6A1 1 0 0 0 8 18.53L15.49 26L28 13.52a1 1 0 0 0 0-1.42"
              className="clr-i-outline clr-i-outline-path-2"/>
        <path fill="none" d="M0 0h36v36H0z"/>
    </svg>
);

export const LogoutIcon: ReactElement<SVGProps<SVGSVGElement>> = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path fill="currentColor"
              d="M10.24 0c3.145 0 6.057 1.395 7.988 3.744a.644.644 0 0 1-.103.92a.68.68 0 0 1-.942-.1a8.961 8.961 0 0 0-6.944-3.256c-4.915 0-8.9 3.892-8.9 8.692c0 4.8 3.985 8.692 8.9 8.692a8.962 8.962 0 0 0 7.016-3.343a.68.68 0 0 1 .94-.113a.644.644 0 0 1 .115.918C16.382 18.564 13.431 20 10.24 20C4.583 20 0 15.523 0 10S4.584 0 10.24 0m6.858 7.16l2.706 2.707c.262.261.267.68.012.936l-2.644 2.643a.662.662 0 0 1-.936-.01a.662.662 0 0 1-.011-.937l1.547-1.547H7.462a.662.662 0 0 1-.67-.654c0-.362.3-.655.67-.655h10.269l-1.558-1.558a.662.662 0 0 1-.011-.936a.662.662 0 0 1 .936.011"/>
    </svg>
);