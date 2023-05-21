export default function Info(color: string) {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.01 16C10.4577 16 10.01 15.5523 10.01 15L10.01 11C10.01 10.4477 10.4577 10 11.01 10C11.5623 10 12.01 10.4477 12.01 11L12.01 15C12.01 15.5523 11.5623 16 11.01 16Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.01 7C12.01 7.55228 11.5623 8 11.01 8L11 8C10.4477 8 10 7.55228 10 7C10 6.44772 10.4477 6 11 6L11.01 6C11.5623 6 12.01 6.44772 12.01 7Z"
        fill={color}
      />
    </>
  );
}
