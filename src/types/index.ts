// Common types for your sandbox experiments

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface LearningExperiment {
  id: string;
  title: string;
  description: string;
  technology: string;
  status: 'planned' | 'in-progress' | 'completed';
  createdAt: Date;
  completedAt?: Date;
}

// Add more types as you experiment with different technologies
