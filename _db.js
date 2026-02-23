let games = [
  { id: "1", title: "The Legend of Code", platform: ["PC", "Switch"] },
  { id: "2", title: "React Racer", platform: ["PC", "PlayStation"] },
  { id: "3", title: "GraphQL Galaxy", platform: ["Xbox", "PC"] },
  { id: "4", title: "Node Ninjas", platform: ["Mobile", "PC"] },
  { id: "5", title: "TypeScript Tycoon", platform: ["PC"] },
  { id: "6", title: "Mongo Madness", platform: ["PC", "Xbox"] }
];

let reviews = [
  { id: "1", rating: 5, content: "Absolutely amazing gameplay!" },
  { id: "2", rating: 4, content: "Really fun but could use more levels." },
  { id: "3", rating: 3, content: "Average experience overall." },
  { id: "4", rating: 5, content: "Best game I've played this year!" },
  { id: "5", rating: 2, content: "Not great, had several bugs." },
  { id: "6", rating: 4, content: "Solid mechanics and nice graphics." }
];

let authors = [
  { id: "1", name: "Alice Johnson", verified: true },
  { id: "2", name: "Brian Smith", verified: false },
  { id: "3", name: "Carla Gomez", verified: true },
  { id: "4", name: "David Lee", verified: false },
  { id: "5", name: "Elena Petrova", verified: true },
  { id: "6", name: "Fatima Khan", verified: false }
];

export default {games, authors, reviews }