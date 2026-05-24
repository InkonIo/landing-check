'use client';

import { useEffect, useState } from 'react';

interface UserProfileClientProps {
  id: string;
}

export default function UserProfileClient({ id }: UserProfileClientProps) {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    if (!id) return;

    window.location.href = `persona://user/${id}`;

    const timer = setTimeout(() => {
      setShowDownload(true);
    }, 2000);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [id]);

  if (!showDownload) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Открываем профиль...</h1>
        <p>Если приложение установлено — оно откроется автоматически</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Скачай Persona, чтобы посмотреть профиль</h2>
      <p>Этот профиль доступен только в приложении</p>
      <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <a
          href="https://apps.apple.com/app/persona"
          style={{ padding: '12px 24px', backgroundColor: '#007AFF', color: 'white', textDecoration: 'none', borderRadius: '8px' }}
        >
          App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.romish.persona"
          style={{ padding: '12px 24px', backgroundColor: '#34A853', color: 'white', textDecoration: 'none', borderRadius: '8px' }}
        >
          Google Play
        </a>
      </div>
    </div>
  );
}