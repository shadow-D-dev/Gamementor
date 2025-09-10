import pubgImg from "../assets/bgmi.webp";
import brawlImg from "../assets/brawl.png";
import csgoImg from "../assets/csgo.png";
import cocImg from "../assets/coc.png";
import valorantImg from "../assets/images.jpeg";

const BASE_API = import.meta.env.VITE_API_FETCH_VIDEOS;
export const MentorsData = [
  {
    title: "shadow",
    image: pubgImg,
    description:
      "Survival ka asli test! BGMI (ya PUBG Mobile) ek battle royale game hai jahan 100 players ek island par land karte hain – sirf ek hi winner banta hai. Loot, shoot aur survive karo – hum sikhaenge har zone mein master kaise banein.",
    // api: "http://localhost:5000/api/videos/fetch/PUBG"
    api: `${BASE_API}/PUBG`,
  },
  {
    title: "marcus",
    image: valorantImg,
    description:
      "Sharpshooters ka ultimate battlefield! Valorant ek 5v5 tactical shooter hai jisme aim, strategy aur teamwork sab kuch hai. Agents ke unique abilities ke saath har round ek naya challenge ban jaata hai. Chalo seekhte hain top-tier gameplay aur ban jao Radiant!",
    api: `${BASE_API}/valorant`,
    // api: "http://localhost:5000/api/videos/fetch/valorant"
  },
  {
    title: "omega",
    image: csgoImg,
    description:
      "The OG tactical shooter! CS:GO ek legendary FPS hai jahan precision aur reflexes matter karte hain. CT vs T – har map, har clutch moment mein skill dikhani hoti hai. Let’s break down pro-level plays aur banaye tumhe ek clutch god.",
    // api: "http://localhost:5000/api/videos/fetch/CSGO"
    api: `${BASE_API}/CSGO`,
  },
  {
    title: "harsh",
    image: cocImg,
    description:
      "Build. Raid. Conquer. Apna khud ka base banao, troops train karo aur doosre players ke villages par attack karo. CoC mein smart base design aur attack strategies hi tumhe top clan tak le jaayengi. Yahaan har warrior banega mastermind!",
    // api: "http://localhost:5000/api/videos/fetch/COC"
    api: `${BASE_API}/COC`,
  },
  {
    title: "deadshot",
    image: brawlImg,
    description:
      "Fast-paced action, cartoon-style mayhem! Brawl Stars ek 3v3 arcade shooter hai jisme multiple game modes aur unique brawlers hote hain. Quick matches, intense fights aur fun gameplay ka perfect combo. Aao sikhein best brawlers aur winning strategies.",
    // api: "http://localhost:5000/api/videos/fetch/brawlstart"
    api: `${BASE_API}/brawlstart`,
  },
];
