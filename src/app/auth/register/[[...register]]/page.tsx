"use client";

import { motion } from "framer-motion";
import { SignUp } from "@clerk/nextjs";

import { AuthCard } from "@/components/auth/auth-card";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function RegisterPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <AuthCard>
        <SignUp
          routing="path"
          path="/auth/register"
          signInUrl="/auth/login"
          fallbackRedirectUrl="/dashboard"
          appearance={clerkAppearance}
        />
      </AuthCard>
    </motion.div>
  );
}
