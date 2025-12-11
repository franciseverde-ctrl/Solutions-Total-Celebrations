import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  location: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}