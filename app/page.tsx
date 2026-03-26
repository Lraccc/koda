'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has selected a role (logged in)
    const selectedRole = typeof window !== 'undefined' && localStorage.getItem('selectedRole');
    
    if (selectedRole) {
      // User is logged in, redirect to dashboard
      router.push('/dashboard');
    } else {
      // User is not logged in, redirect to login
      router.push('/login');
    }
  }, [router]);

  return null;
}
