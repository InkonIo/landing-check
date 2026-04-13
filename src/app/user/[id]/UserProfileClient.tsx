'use client';

import { useEffect } from 'react';

interface UserProfileClientProps {
  id: string;
}

export default function UserProfileClient({ id }: UserProfileClientProps) {
  useEffect(() => {
    const tryOpenApp = () => {
      // Попробуем оба способа
      window.location.href = `persona://user/${id}`;
      
      // Fallback для iOS Universal Links
      setTimeout(() => {
        window.location.href = `https://personabest.com/user/${id}`;
      }, 100);
      
      // Показываем предложение скачать через 2.5 секунды
      setTimeout(() => {
        const downloadPrompt = document.getElementById('download-prompt');
        if (downloadPrompt) {
          downloadPrompt.style.display = 'block';
        }
      }, 2500);
    };

    if (id) {
      tryOpenApp();
    }
  }, [id]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Открытие профиля...</h1>
      <p>Переходим в приложение Persona</p>
      
      <div id="download-prompt" style={{ display: 'none', marginTop: '30px' }}>
        <h2>Приложение не установлено?</h2>
        <p>Скачайте Persona, чтобы посмотреть этот профиль</p>
        <div style={{ marginTop: '20px' }}>
          <a 
            href="https://apps.apple.com/app/persona" 
            style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007AFF', color: 'white', textDecoration: 'none', borderRadius: '5px' }}
          >
            App Store
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.romish.persona"
            style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#34A853', color: 'white', textDecoration: 'none', borderRadius: '5px' }}
          >
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}