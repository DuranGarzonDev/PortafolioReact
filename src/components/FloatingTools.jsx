import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingTools({ label }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const onScroll = () => setVisible(scrollY > 700); onScroll(); addEventListener('scroll', onScroll, { passive: true }); return () => removeEventListener('scroll', onScroll); }, []);
  return <button className={visible ? 'back-top visible' : 'back-top'} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label={label}><ArrowUp size={19}/></button>;
}
