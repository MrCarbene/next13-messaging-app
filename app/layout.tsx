import './globals.css';
import ToasterContext from './context/ToastContext';

export const metadata = {
  title: 'Messanger App',
  description: 'A Real-time Messaging App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}