import { TutoringRequest } from "@/types";

// Mock data - replace with actual API calls or database queries
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

export async function generateStaticParams() {
  return mockRequests.map((request) => ({
    id: request.id,
  }));
}

export default function RequestPage({ params }: { params: { id: string } }) {
  const request = mockRequests.find((req) => req.id === params.id);

  if (!request) {
    return <div>Request not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{request.title}</h1>
      <p className="text-lg">{request.description}</p>
      <p className="text-sm text-gray-500">Subject: {request.subject}</p>
    </div>
  );
}
