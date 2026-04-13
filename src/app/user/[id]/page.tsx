import UserProfileClient from "./UserProfileClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function UserProfile({ params }: PageProps) {
  const { id } = await params;
  return <UserProfileClient id={id} />;
} 