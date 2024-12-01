"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { Star, MessageSquare } from "lucide-react";

const mockTutors: (User & { rating: number; subjects: string[] })[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@university.edu",
    role: "tutor",
    major: "Mathematics",
    year: "Senior",
    rating: 4.8,
    subjects: ["Calculus", "Linear Algebra", "Statistics"],
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@university.edu",
    role: "tutor",
    major: "Physics",
    year: "Junior",
    rating: 4.9,
    subjects: ["Physics", "Mathematics", "Programming"],
  },
];

export default function TutorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tutors] = useState(mockTutors);

  const filteredTutors = tutors.filter(
    (tutor) =>
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((subject) =>
        subject.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Tutors</h1>
        <Input
          placeholder="Search by name or subject..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTutors.map((tutor) => (
          <Card key={tutor.id}>
            <CardHeader>
              <CardTitle>{tutor.name}</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{tutor.major}</span>
                <span>•</span>
                <span>{tutor.year}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>{tutor.rating.toFixed(1)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tutor.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message Tutor
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}