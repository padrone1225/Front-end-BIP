export default function GridView(color: string) {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H8C8.55228 0 9 0.447715 9 1V8C9 8.55228 8.55228 9 8 9H1C0.447715 9 0 8.55228 0 8V1ZM2 2V7H7V2H2Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 1C11 0.447715 11.4477 0 12 0H19C19.5523 0 20 0.447715 20 1V8C20 8.55228 19.5523 9 19 9H12C11.4477 9 11 8.55228 11 8V1ZM13 2V7H18V2H13Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 12C11 11.4477 11.4477 11 12 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H12C11.4477 20 11 19.5523 11 19V12ZM13 13V18H18V13H13Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 11.4477 0.447715 11 1 11H8C8.55228 11 9 11.4477 9 12V19C9 19.5523 8.55228 20 8 20H1C0.447715 20 0 19.5523 0 19V12ZM2 13V18H7V13H2Z"
        fill={color}
      />
    </>
  );
}
