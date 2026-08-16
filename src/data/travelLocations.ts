// Single source of truth for where each travel photo was taken — shared by
// the polaroid gallery (caption text) and the map (pin placement). Keyed by
// filename stem (no extension) so it lines up with whatever gets dropped
// into src/assets/travel/.
export interface TravelLocation {
  id: string;
  caption: string;
  lat: number;
  lon: number;
}

export const TRAVEL_LOCATIONS: TravelLocation[] = [
  { id: 'bruce_peninsula', caption: 'Bruce Peninsula, Canada', lat: 45.0333, lon: -81.4 },
  { id: 'cotopaxi', caption: 'Cotopaxi, Ecuador', lat: -0.6836, lon: -78.4386 },
  { id: 'egypt', caption: 'Luxor, Egypt', lat: 25.6872, lon: 32.6396 },
  { id: 'egypt2', caption: 'Giza, Egypt', lat: 29.9765, lon: 31.1313 },
  { id: 'galapagos', caption: 'Galápagos Islands, Ecuador', lat: -0.75, lon: -90.3333 },
  { id: 'gyeongju', caption: 'Gyeongju, South Korea', lat: 35.8562, lon: 129.2247 },
  { id: 'hungary', caption: 'Budapest, Hungary', lat: 47.4979, lon: 19.0402 },
  { id: 'lisbon', caption: 'Lisbon, Portugal', lat: 38.7223, lon: -9.1393 },
  { id: 'montreal', caption: 'Montreal, Canada', lat: 45.5017, lon: -73.5673 },
  { id: 'nagano', caption: 'Nagano, Japan', lat: 36.6513, lon: 138.181 },
  { id: 'petra', caption: 'Petra, Jordan', lat: 30.3285, lon: 35.4444 },
  { id: 'philippines', caption: 'Manila, Philippines', lat: 14.5995, lon: 120.9842 },
  { id: 'prague', caption: 'Prague, Czechia', lat: 50.0755, lon: 14.4378 },
  { id: 'sanjuanislands', caption: 'San Juan Islands, USA', lat: 48.533, lon: -123.0888 },
  { id: 'seoul', caption: 'Seoul, South Korea', lat: 37.5665, lon: 126.978 },
  { id: 'taiwan', caption: 'Jiufen, Taiwan', lat: 25.1097, lon: 121.8452 },
  { id: 'uzbekistan', caption: 'Samarkand, Uzbekistan', lat: 39.627, lon: 66.975 },
  { id: 'vienna', caption: 'Vienna, Austria', lat: 48.2082, lon: 16.3738 },
];
