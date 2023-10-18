import '../styles/globals.css';

export const metadata = {
  title: 'VoicePen',
  description: 'voice to text application',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
