// Event Type Definitions
export interface Event {
  id: number;
  name: string; // Changed from 'title' to match your data
  venue: string; // Changed from 'location' to match your data
  date: string;
  time: string;
  price: number; // Changed from string to number to match your data
  capacity: string; // Added to match your data structure
  rating: string; // Added to match your data structure
  description: string;
  features: string[];
  image?: string; // Made optional since not all events may have images
}

// Legacy alias for backward compatibility (if needed)
export type EventType = Event;

// Form Data Types
export interface BookingFormData {
  fullName: string; // Changed from 'name' to match your component
  phoneNumber: string; // Changed from 'phone' to match your component
  email: string;
  date: string;
  ticketType: string; // Added to match your component
  numberOfTickets: number; // Changed from 'tickets' and type to match your component
  specialRequests?: string; // Made optional
}

// Component Props Types
export interface EventCardProps {
  event: Event; // Changed from EventType to Event
  onBookNow: (event: Event) => void; // Updated to pass event data
}

export interface BookingFormProps {
  event: Event | null; // Added event prop that your component needs
  isOpen: boolean;
  onClose: () => void;
}

export interface EventsProps {
  onBookNow: (event: Event) => void; // Updated to pass event data
}
