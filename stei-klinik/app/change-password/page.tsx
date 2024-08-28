'use client';

import { useRouter } from 'next/navigation';

export default function ChangePassword() {
    useRouter().push("/change-password/verification");
}