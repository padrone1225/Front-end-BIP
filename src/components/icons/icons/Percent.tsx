export default function Percent(color: string) {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7071 1.29289C17.0976 1.68342 17.0976 2.31658 16.7071 2.70711L2.70711 16.7071C2.31658 17.0976 1.68342 17.0976 1.29289 16.7071C0.902369 16.3166 0.902369 15.6834 1.29289 15.2929L15.2929 1.29289C15.6834 0.902369 16.3166 0.902369 16.7071 1.29289Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2C2.67157 2 2 2.67157 2 3.5C2 4.32843 2.67157 5 3.5 5C4.32843 5 5 4.32843 5 3.5C5 2.67157 4.32843 2 3.5 2ZM0 3.5C0 1.567 1.567 0 3.5 0C5.433 0 7 1.567 7 3.5C7 5.433 5.433 7 3.5 7C1.567 7 0 5.433 0 3.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 13C13.6716 13 13 13.6716 13 14.5C13 15.3284 13.6716 16 14.5 16C15.3284 16 16 15.3284 16 14.5C16 13.6716 15.3284 13 14.5 13ZM11 14.5C11 12.567 12.567 11 14.5 11C16.433 11 18 12.567 18 14.5C18 16.433 16.433 18 14.5 18C12.567 18 11 16.433 11 14.5Z"
        fill={color}
      />
    </>
  );
}