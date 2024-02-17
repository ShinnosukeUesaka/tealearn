'use client';
import Image from "next/image";
import Classroom from '@/components/classroom';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center">
      <Classroom />
    </main>
  );
}
