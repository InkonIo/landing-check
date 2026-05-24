'use client';

import { useEffect, useState } from 'react';

interface UserProfileClientProps {
  id: string;
}

export default function UserProfileClient({
  id,
}: UserProfileClientProps) {
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    if (!id) return;

    const link = document.createElement('a');
    link.href = `persona://user/${id}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const timer = setTimeout(() => {
      setShowDownload(true);
    }, 2500);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
      }
    };

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    );

    return () => {
      clearTimeout(timer);
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      );
    };
  }, [id]);

  if (!showDownload) {
    return (
      <div
        style={{
          padding: '40px 20px',
          textAlign: 'center',
        }}
      >
        <h1>Открываем профиль...</h1>

        <p style={{ color: '#666' }}>
          Если приложение установлено — оно откроется автоматически
        </p>

        <a
          href={`persona://user/${id}`}
          style={{
            display: 'inline-block',
            marginTop: '16px',
            padding: '12px 24px',
            backgroundColor: '#007AFF',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
          }}
        >
          Открыть в Persona
        </a>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <h2>Скачай Persona, чтобы посмотреть профиль</h2>

      <p style={{ color: '#666' }}>
        Этот профиль доступен только в приложении
      </p>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        <a
          href="https://apps.apple.com/app/persona"
          style={{
            padding: '12px 24px',
            backgroundColor: '#007AFF',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
          }}
        >
          App Store
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.romish.persona"
          style={{
            padding: '12px 24px',
            backgroundColor: '#34A853',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
          }}
        >
          Google Play
        </a>
      </div>
    </div>
  );
}