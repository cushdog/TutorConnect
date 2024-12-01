"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { TutoringRequest, TutorResponse } from "@/types";
import { formatDistanceToNow } from "date-fns";

// Mock data - replace with actual API calls
const mockRequest: TutoringRequest = {
  id: "1",
  title: "Help with Calculus II - Integration Techniques",
  subject: "Mathematics",
  description: "Need help understanding integration by parts and trig substitution. I'm particularly struggling with identifying when to use which method and how to set up the problems correctly.",
  studentId: "student1",
  createdAt: new Date("2024-03-20"),
  status: "open",
  responses: [
    {
      id: "1",
      tutorId: "tutor1",
      requestId: "1",
      message: "Hi! I'm a math major and I'd be happy to help you with integration techniques. I've tutored several students in Calculus II before.",
      createdAt: new Date("2024-03-20T10:00:00"),
    },
  ],
};

// Mock requests for generating static paths
const mockRequests = [
  { id: "1" },
  { id: "2" },
];

export function generateStaticParams() {
  return mockRequests.map((request) => ({
    id: request.id,
  }));
}

export default function RequestPage() {
  const params = useParams();
  const [request] = useState<TutoringRequest>(mockRequest);
  const [newResponse, setNewResponse] = useState("");

  const handleSubmitResponse = () => {
    if (!newResponse.trim()) return;
    
    // In a real app, this would be an API call
    console.log("Submitting response:", {
      requestId: params.id,
      message: newResponse,
    });
    
    setNewResponse("");
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{request.title}</CardTitle>
            <Badge variant={request.status === "open" ? "default" : "secondary"}>
              {request.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="outline">{request.subject}</Badge>
              <span className="text-sm text-muted-foreground">
                Posted {formatDistanceToNow(new Date(request.createdAt))} ago
              </span>
            </div>
            <p className="text-muted-foreground">{request.description}</p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Responses</h2>
        
        {request.responses.map((response) => (
          <Card key={response.id}>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(response.createdAt))} ago
                </div>
                <p>{response.message}</p>
              </div>
            </CardContent>
          </Card>
        ))}

        {request.status === "open" && (
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Textarea
                  placeholder="Write your response..."
                  value={newResponse}
                  onChange={(e) => setNewResponse(e.target.value)}
                  rows={4}
                />
                <Button onClick={handleSubmitResponse}>Submit Response</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}