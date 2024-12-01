"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TutoringRequest } from "@/types";
import { formatDistanceToNow } from "date-fns";

interface RequestCardProps {
  request: TutoringRequest;
  onRespond?: () => void;
}

export function RequestCard({ request, onRespond }: RequestCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{request.title}</CardTitle>
          <Badge variant={request.status === "open" ? "default" : "secondary"}>
            {request.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{request.subject}</Badge>
            <span className="text-sm text-muted-foreground">
              Posted {formatDistanceToNow(new Date(request.createdAt))} ago
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{request.description}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-muted-foreground">
            {request.responses.length} responses
          </div>
          {request.status === "open" && onRespond && (
            <Button onClick={onRespond}>Respond</Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}