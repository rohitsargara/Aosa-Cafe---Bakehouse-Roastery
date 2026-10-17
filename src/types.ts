export type MenuCategory = 'all' | 'coffee' | 'bakery' | 'savory' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'bakery' | 'savory' | 'desserts';
  subCategory?: string;
  price: number;
  description: string;
  tags?: string[];
  dietary?: 'veg' | 'non-veg' | 'vegan-friendly';
  popular?: boolean;
  notes?: string;
}

export interface CoffeeBean {
  id: string;
  name: string;
  estate: string;
  region: string;
  elevation: string;
  process: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark';
  notes: string[];
  recommendedBrew: string;
  pricePerBag: number;
}

export interface BrewGuide {
  id: string;
  method: string;
  description: string;
  ratio: string;
  grind: string;
  temp: string;
  time: string;
  instructions: string[];
}

export interface ReservationData {
  guestName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Indoor Roastery Bar' | 'Courtyard Patio' | 'Quiet Work Booth' | 'Any Available';
  specialRequests?: string;
}

export interface TrayItem {
  item: MenuItem;
  quantity: number;
  selectedOption?: string;
}
