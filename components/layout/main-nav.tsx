"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6" />
          <span className="font-bold text-xl">PeerTutor</span>
        </Link>
        <Button
          variant={pathname === "/" ? "secondary" : "ghost"}
          className="text-sm font-medium transition-colors"
          asChild
        >
          <Link href="/">Home</Link>
        </Button>
        <Button
          variant={pathname === "/requests" ? "secondary" : "ghost"}
          className="text-sm font-medium transition-colors"
          asChild
        >
          <Link href="/requests">Requests</Link>
        </Button>
        <Button
          variant={pathname === "/tutors" ? "secondary" : "ghost"}
          className="text-sm font-medium transition-colors"
          asChild
        >
          <Link href="/tutors">Find Tutors</Link>
        </Button>
      </div>
      <ThemeToggle />
    </div>
  );
}