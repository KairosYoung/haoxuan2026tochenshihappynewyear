import { ReactNode } from 'react';

export interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string | ReactNode;
  iconType: 'text' | 'ppt' | 'code';
  details?: string | ReactNode; // Content for modal (Quote)
  previewImage?: string; // Legacy prop, can be used for thumbnails if needed
  pdfLink?: string;      // For 2024 download
  slides?: string[];     // For 2025 gallery
}

export interface MemoryCard {
  id: string;
  time: string;      // e.g., "2025.MAR"
  title: string;     // e.g., "硕士毕业论文"
  reflection: string; // Modal content
  imageSrc: string;  // Photo URL
}

export interface ResearchTopic {
  id: string;
  title: string;
  priority: number; 
  motivation?: string; 
}

export interface GanttItem {
  task: string;
  startMonth: number; // 1-12
  durationMonths: number;
}