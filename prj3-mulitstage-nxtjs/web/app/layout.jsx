export const metadata = {
  title: "Project 3",
  description: "Next.js behind Nginx reverse proxy"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

