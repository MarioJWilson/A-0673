export const galleryItems = [
  {
    src: "/images/workshop-02.jpg",
    title: "On the workbench",
    category: "Workshop & CAD",
    description: "A close-up of the robot, electronics, and wiring at the workbench.",
  },
  {
    src: "/images/workshop-01.jpg",
    title: "Building together",
    category: "Workshop & CAD",
    description: "A behind-the-scenes look at a workshop session.",
  },
  {
    src: "/images/cad-02.jpg",
    title: "Ideas taking shape",
    category: "Workshop & CAD",
    description: "A robot design on screen, with mechanisms and components in CAD.",
  },
  {
    src: "/images/cad-01.jpg",
    title: "From sketch to design",
    category: "Workshop & CAD",
    description: "Design exploration on screen.",
  },
  {
    src: "/images/cad-03.jpg",
    title: "Another perspective",
    category: "Workshop & CAD",
    description: "Another view of the robot CAD design.",
  },
  {
    src: "/images/cad-04.jpg",
    title: "Working through the details",
    category: "Workshop & CAD",
    description: "A closer look at the design process in CAD.",
  },
  {
    src: "/images/biobuzz-field.jpg",
    title: "BIOBUZZ field",
    category: "Game fields",
    description:
      "Supplied BIOBUZZ game-field reference image. For official rules and dimensions, consult FIRST season resources.",
  },
  {
    src: "/images/centerstage-field.jpg",
    title: "CENTERSTAGE field",
    category: "Game fields",
    description:
      "Supplied CENTERSTAGE game-field reference. This image does not indicate team participation or results.",
  },
  {
    src: "/images/powerplay-field.jpg",
    title: "POWERPLAY field",
    category: "Game fields",
    description:
      "Supplied POWERPLAY game-field reference. This image does not indicate team participation or results.",
  },
  {
    src: "/images/sample-robot.jpg",
    title: "Sample robot · reference only",
    category: "Game fields",
    description:
      "An illustrative sample robot supplied as a reference. This is not presented as Totus Tuus’s robot.",
  },
  ...["Aiden", "Jared", "Mario", "Nicholas", "Peter", "Vivan", "Willy"].map((name) => ({
    src: `/images/${name.toLowerCase()}.png`,
    title: name,
    category: "Portraits",
    description: `${name} — team portrait. Role and biography coming soon.`,
  })),
  {
    src: "/images/crest.png",
    title: "Our team identity",
    category: "Team identity",
    description: "The Totus Tuus crest — FIRST Tech Challenge Team 19168.",
  },
];
export const galleryFilters = [
  "All photos",
  "Workshop & CAD",
  "Game fields",
  "Portraits",
  "Team identity",
];
export const gameFields = [6, 7, 8];
