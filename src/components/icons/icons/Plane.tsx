export default function Plane(color: string) {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7071 0.292893C22.0976 0.683417 22.0976 1.31658 21.7071 1.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L20.2929 0.292893C20.6834 -0.0976311 21.3166 -0.0976311 21.7071 0.292893Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7071 0.292891C21.9787 0.564529 22.0708 0.967761 21.9439 1.33035L14.9439 21.3303C14.8084 21.7173 14.4504 21.9825 14.0408 21.9992C13.6311 22.0159 13.2527 21.7808 13.0862 21.4061L9.2424 12.7576L0.593862 8.91381C0.219181 8.74728 -0.0158823 8.36891 0.000831516 7.95923C0.0175453 7.54956 0.282649 7.19159 0.66965 7.05614L20.6697 0.056139C21.0322 -0.0707664 21.4355 0.0212527 21.7071 0.292891ZM3.71108 8.1106L10.4061 11.0862C10.6324 11.1867 10.8133 11.3676 10.9138 11.5939L13.8894 18.2889L19.37 2.62997L3.71108 8.1106Z"
        fill={color}
      />
    </>
  );
}