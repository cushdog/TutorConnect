export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'tutor';
  major?: string;
  year?: string;
}

export interface TutoringRequest {
  id: string;
  title: string;
  subject: string;
  description: string;
  studentId: string;
  createdAt: Date;
  status: 'open' | 'closed';
  responses: TutorResponse[];
}

export interface TutorResponse {
  id: string;
  tutorId: string;
  requestId: string;
  message: string;
  createdAt: Date;
}