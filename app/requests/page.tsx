"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RequestCard } from "@/components/request-card";
import { TutoringRequest } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

// Mock data - replace with actual API calls
const mockRequests: TutoringRequest[] = [
  {
    id: "1",
    title: "Help with Calculus II - Integration Techniques",
    subject: "Mathematics",
    description: "Need help understanding integration by parts and trig substitution.",
    studentId: "student1",
    createdAt: new Date("2024-03-20"),
    status: "open",
    responses: [],
  },
  {
    id: "2",
    title: "Physics Help - Quantum Mechanics",
    subject: "Physics",
    description: "Looking for help with Schrödinger equation and wave functions.",
    studentId: "student2",
    createdAt: new Date("2024-03-19"),
    status: "open",
    responses: [{ id: "1", tutorId: "tutor1", requestId: "2", message: "I can help!", createdAt: new Date() }],
  },
];

export default function RequestsPage() {
  const router = useRouter();
  const [requests] = useState<TutoringRequest[]>(mockRequests);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequests = requests.filter(
    (request) =>
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRespond = (requestId: string) => {
    router.push(`/requests/${requestId}`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tutoring Requests</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Request
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a New Request</DialogTitle>
              <DialogDescription>
                Describe what you need help with and tutors will respond to your request.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Title" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Describe what you need help with..." />
              <Button className="w-full">Post Request</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6">
        <Input
          placeholder="Search requests..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRequests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onRespond={() => handleRespond(request.id)}
          />
        ))}
      </div>
    </div>
  );
}
