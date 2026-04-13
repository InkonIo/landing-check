import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Профиль пользователя - PersonaBest',
  description: 'Посмотрите профиль пользователя в приложении PersonaBest',
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 