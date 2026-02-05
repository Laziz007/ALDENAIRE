"use client";

import { motion } from "framer-motion";
import { SignIn } from "@clerk/nextjs";

import { AuthCard } from "@/components/auth/auth-card";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function LoginPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <AuthCard>
        <SignIn
          routing="path"
          path="/auth/login"
          signUpUrl="/auth/register"
          fallbackRedirectUrl="/dashboard"
          appearance={clerkAppearance}
        />
      </AuthCard>
    </motion.div>
  );
}
