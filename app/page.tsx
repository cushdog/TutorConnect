import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="px-6 py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Connect with Expert Student Tutors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help from fellow students who excel in your subject area. Post your questions
            and connect with qualified peer tutors.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/requests">Find Help</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tutors">Become a Tutor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <BookOpen className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Expert Peer Tutors</h3>
                  <p className="text-muted-foreground">
                    Connect with top-performing students who understand your coursework
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Users className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Community Learning</h3>
                  <p className="text-muted-foreground">
                    Join a supportive community of students helping students
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <MessageSquare className="h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold">Quick Responses</h3>
                  <p className="text-muted-foreground">
                    Get help quickly with our active community of tutors
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}