export type ChurchEvent = {
  mon: string;
  day: string;
  when: string;
  title: string;
  desc: string;
  img: string;
};

// Sample upcoming events — replace with real ones (or wire to the calendar).
export const events: ChurchEvent[] = [
  {
    mon: "Jun",
    day: "8",
    when: "Mon–Fri · 6:00 PM",
    title: "Vacation Bible School",
    desc: "A week of music, games, and Gospel for kids K–6. Registration opens May 15.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format&fit=crop",
  },
  {
    mon: "Jun",
    day: "15",
    when: "Sunday · 10:45 AM",
    title: "Father's Day Service",
    desc: "Honoring the dads, grandads, and father figures in our church family.",
    img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80&auto=format&fit=crop",
  },
  {
    mon: "Jul",
    day: "4",
    when: "Friday · 6:00 PM",
    title: "Church Family Cookout",
    desc: "Burgers, fellowship, and fireworks. Bring a side dish and your favorite folding chair.",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80&auto=format&fit=crop",
  },
];
