export type StaffMember = {
  name: string;
  role: string;
  img: string;
  bio: string[];
  note?: string;
};

export const staff: StaffMember[] = [
  {
    name: "Rev. Tony Parker",
    role: "Senior Pastor",
    img: "/staff/tony-parker.jpg",
    bio: [
      "Bro. Tony graduated from The Baptist College of Florida in 1989. He accepted Jesus Christ as his Lord and Savior at the age of twelve, and God called him into the ministry shortly after he graduated from Eastside High School in Gainesville. Since then he has served in many capacities within the church — Youth Minister, Associate Pastor, Interim Pastor, teacher, and more.",
      "Bro. Tony has a burning passion to love and guide people and to see their lives changed by the power of God. He and his wife, Debbie, have four grown children and several grandchildren. Besides being Bro. Tony's soulmate and a fantastic lady of God, Debbie is a dedicated police officer and a great asset to HBC.",
    ],
    note: "We are so blessed to have Bro. Tony as our pastor!",
  },
  {
    name: "Charles Brock",
    role: "Worship Minister",
    img: "/staff/charles-brock.jpg",
    bio: [
      "Our worship leader, Charles Brock, is a life-long resident of Levy County. Charles married his wife, Donna, in 1983, and they have two grown children, Chad and Maegan, who are both teachers.",
      "Charles graduated from Trenton High School in 1978. He has been leading worship since he was a youth and served several churches in the area before coming to Hardeetown. He was ordained as a deacon in 1990.",
    ],
  },
  {
    name: "Rev. Kevin Amerson",
    role: "Associate Pastor · Student Ministry",
    img: "/staff/kevin-amerson.jpg",
    bio: [
      "Kevin Amerson serves as our Associate Pastor of Student Ministry. A graduate of Colorado Christian University with a focus on apologetic studies, Kevin is deeply passionate about guiding young people in their faith — equipping students with biblical truth and nurturing their growth into strong disciples of Christ.",
      "Alongside his wife, Leslie, Kevin brings a heart for ministry and a dedication to serving the next generation. His leadership, wisdom, and commitment to the gospel are a tremendous blessing to our church and community.",
    ],
  },
];
