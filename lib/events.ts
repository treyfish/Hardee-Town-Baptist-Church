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
    img: "/events/vbs-kids.jpg",
  },
  {
    mon: "Jun",
    day: "15",
    when: "Sunday · 10:45 AM",
    title: "Father's Day Service",
    desc: "Honoring the dads, grandads, and father figures in our church family.",
    img: "/events/sunday-service.jpg",
  },
  {
    mon: "Jul",
    day: "4",
    when: "Friday · 6:00 PM",
    title: "Church Family Cookout",
    desc: "Burgers, fellowship, and fireworks. Bring a side dish and your favorite folding chair.",
    img: "/events/fellowship-dinner.jpg",
  },
];
