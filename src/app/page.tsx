'use client';
import Image from "next/image";
import Classroom from '@/components/classroom';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Classroom />
    </main>
  );
}
