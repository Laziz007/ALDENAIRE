export const size = { width: 32, height: 32 };
export const contentType = "image/svg+xml";

export default function Icon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="iconGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B0F1A" />
          <stop offset="50%" stopColor="#4B5563" />
          <stop offset="100%" stopColor="#9CA3AF" />
        </linearGradient>
      </defs>
      <path d="M4 25.5L14.6 5.5l4.2 7.4-6.7 12.6H4z" fill="url(#iconGradient)" />
      <path d="M16.4 10.5L28 25.5h-8.2l-6-9.6 2.6-5.4z" fill="url(#iconGradient)" />
    </svg>
  );
}
