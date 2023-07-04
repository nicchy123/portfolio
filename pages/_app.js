import '@/styles/globals.css'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("dark-mode");
    if (dark === '') {
      setDark(Boolean(theme))
    }
    if (!theme) {
      localStorage.setItem("dark-mode", true);
    }
    else {
      if (theme === 'false') {
        setDark(false)
        document.body.classList.remove("dark-mode")
        setLoading(false)
      }
      else {
        setDark(true)
        document.body.classList.add("dark-mode");
        setLoading(false)
      }
    }
  }, [dark])
  return <>
    {
      !loading &&
      <Component {...pageProps} />
    }
  </>
}
