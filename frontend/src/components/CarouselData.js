import pubgImg from "../assets/bgmi.webp";
import brawlImg from "../assets/brawl.png";
import csgoImg from "../assets/csgo.png";
import cocImg from "../assets/coc.png";
import valorantImg from "../assets/images.jpeg";

const BASE_API = import.meta.env.VITE_API_FETCH_VIDEOS;
export const GamesCarouselData = [
  {
    title: "bgmi",
    image: pubgImg,
    description:
      "BGMI brings the thrill of battle royale with intense gunfights, rotating zones, and survival tactics. Test your reflexes and strategy to become the last one standing.",
    api: `${BASE_API}/PUBG`,
  },
  {
    title: "valorant",
    image: valorantImg,
    description:
      "Valorant blends precise shooting with agent abilities. Every match is a mix of sharp aim, creative utility, and flawless teamwork.",
    api: `${BASE_API}/valorant`,
  },
  {
    title: "csgo",
    image: csgoImg,
    description:
      "CS:GO is the arena for tactical legends. Classic maps, razor-sharp aim, and perfect nade lineups make every round a nail-biter.",
    api: `${BASE_API}/CSGO`,
  },
  {
    title: "coc",
    image: cocImg,
    description:
      "Clash of Clans is all about building empires and waging wars. From clever base layouts to powerful attack combos, it’s strategy at its finest.",
    api: `${BASE_API}/COC`,
  },
  {
    title: "brawlstars",
    image: brawlImg,
    description:
      "Brawl Stars is fast, chaotic, and endlessly fun. With unique brawlers and quick 3v3 battles, it’s the perfect mix of casual fun and competitive skill.",
    api: `${BASE_API}/brawlstars`,
  },
];

export const MentorsCarouselData = [
  {
    title: "shadow",
    image: pubgImg,
    description:
      "Shadow is a BGMI veteran known for clutch survivals and zone mastery. Learn rotations, gunfights, and leadership from a pro IGL.",
    api: `${BASE_API}/mentors/bgmi`,
  },
  {
    title: "marcus",
    image: valorantImg,
    description:
      "Marcus, a Radiant-level Valorant mentor, teaches agent mastery, sharp aiming drills, and high-level team strategies.",
    api: `${BASE_API}/mentors/valorant`,
  },
  {
    title: "omega",
    image: csgoImg,
    description:
      "Omega is a CSGO tactician with years of LAN experience. From perfect smokes to eco-round comebacks, he’ll sharpen your game sense.",
    api: `${BASE_API}/mentors/csgo`,
  },
  {
    title: "harsh",
    image: cocImg,
    description:
      "Harsh is a Clash of Clans strategist who designs unbreakable bases and teaches advanced attack combos to dominate clan wars.",
    api: `${BASE_API}/mentors/coc`,
  },
  {
    title: "deadshot",
    image: brawlImg,
    description:
      "Deadshot specializes in Brawl Stars mechanics and brawler synergy. Learn the secrets of timing, positioning, and perfect comps.",
    api: `${BASE_API}/mentors/brawlstars`,
  },
];

export const CommunityCarouselData = [
  {
    title: "bgmi-community",
    image: pubgImg,
    description:
      "Form squads, share rotation maps, and post your best clutches. The BGMI community is all about survival tips and fun banter.",
    api: `${BASE_API}/community/bgmi`,
  },
  {
    title: "valorant-community",
    image: valorantImg,
    description:
      "Discuss agents, share lineups, and clip your best aces. A community where Valorant mains connect and grow together.",
    api: `${BASE_API}/community/valorant`,
  },
  {
    title: "csgo-community",
    image: csgoImg,
    description:
      "From nade setups to ranked highlights, this is where CSGO players swap strategies, memes, and unforgettable clutch moments.",
    api: `${BASE_API}/community/csgo`,
  },
  {
    title: "coc-community",
    image: cocImg,
    description:
      "Clashers unite! Share base designs, attack strategies, and recruit clanmates in this hub for builders and raiders alike.",
    api: `${BASE_API}/community/coc`,
  },
  {
    title: "brawlstars-community",
    image: brawlImg,
    description:
      "A lively place for Brawlers to chat about comps, new modes, and highlight reels. Quick games, quick laughs, endless fun.",
    api: `${BASE_API}/community/brawlstars`,
  },
];

export const TournamentsCarouselData = [
  {
    title: "bgmi-tournament",
    image: pubgImg,
    description:
      "Join BGMI tournaments in solo, duo, and squad formats. Each season brings fresh rules and intense survival showdowns.",
    api: `${BASE_API}/tournaments/bgmi`,
  },
  {
    title: "valorant-tournament",
    image: valorantImg,
    description:
      "Compete in Valorant 5v5 brackets with pro-style maps and cash rewards. Every round is a chance to prove your clutch potential.",
    api: `${BASE_API}/tournaments/valorant`,
  },
  {
    title: "csgo-tournament",
    image: csgoImg,
    description:
      "Weekend cups and league-style CSGO battles. Master your aim, perfect your utilities, and fight for the top spot.",
    api: `${BASE_API}/tournaments/csgo`,
  },
  {
    title: "coc-tournament",
    image: cocImg,
    description:
      "Clan wars turned competitive! Battle other clans in attack-defense tournaments to prove your strategic dominance.",
    api: `${BASE_API}/tournaments/coc`,
  },
  {
    title: "brawlstars-tournament",
    image: brawlImg,
    description:
      "Fast-paced 3v3 Brawl Stars tournaments with rotating modes and unique prizes. Outsmart your opponents and claim the crown.",
    api: `${BASE_API}/tournaments/brawlstars`,
  },
];
