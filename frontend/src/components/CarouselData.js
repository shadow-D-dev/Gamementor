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
      "Survival ka asli test! BGMI (ya PUBG Mobile) ek battle royale game hai jahan 100 players ek island par land karte hain – sirf ek hi winner banta hai. Loot, shoot aur survive karo – hum sikhaenge har zone mein master kaise banein.",
    // api: "http://localhost:5000/api/videos/fetch/PUBG"
    api: `${BASE_API}/PUBG`,
  },
  {
    title: "valorant",
    image: valorantImg,
    description:
      "Sharpshooters ka ultimate battlefield! Valorant ek 5v5 tactical shooter hai jisme aim, strategy aur teamwork sab kuch hai. Agents ke unique abilities ke saath har round ek naya challenge ban jaata hai. Chalo seekhte hain top-tier gameplay aur ban jao Radiant!",
    api: `${BASE_API}/valorant`,
    // api: "http://localhost:5000/api/videos/fetch/valorant"
  },
  {
    title: "csgo",
    image: csgoImg,
    description:
      "The OG tactical shooter! CS:GO ek legendary FPS hai jahan precision aur reflexes matter karte hain. CT vs T – har map, har clutch moment mein skill dikhani hoti hai. Let’s break down pro-level plays aur banaye tumhe ek clutch god.",
    // api: "http://localhost:5000/api/videos/fetch/CSGO"
    api: `${BASE_API}/CSGO`,
  },
  {
    title: "coc",
    image: cocImg,
    description:
      "Build. Raid. Conquer. Apna khud ka base banao, troops train karo aur doosre players ke villages par attack karo. CoC mein smart base design aur attack strategies hi tumhe top clan tak le jaayengi. Yahaan har warrior banega mastermind!",
    // api: "http://localhost:5000/api/videos/fetch/COC"
    api: `${BASE_API}/COC`,
  },
  {
    title: "brawlstart",
    image: brawlImg,
    description:
      "Fast-paced action, cartoon-style mayhem! Brawl Stars ek 3v3 arcade shooter hai jisme multiple game modes aur unique brawlers hote hain. Quick matches, intense fights aur fun gameplay ka perfect combo. Aao sikhein best brawlers aur winning strategies.",
    // api: "http://localhost:5000/api/videos/fetch/brawlstart"
    api: `${BASE_API}/brawlstart`,
  },
];

export const MentorsCarouselData = [
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

export const CommunityCarouselData = [
  {
    title: "bgmi-community",
    image: pubgImg,
    description:
      "BGMI ke players ke liye chat rooms – strategies share karo, squads banao aur apne best clutches dikhayo. Yeh jagah hai jahan har lobby ka masti aur meta discuss hota hai.",
    api: `${BASE_API}/community/bgmi`,
  },
  {
    title: "valorant-community",
    image: valorantImg,
    description:
      "Valorant ke agents aur maps par endless discussions. Lineups share karo, clutch moments ke clips daalo aur new teammates dhundo. Ek Radiant-level community ka hissa bano!",
    api: `${BASE_API}/community/valorant`,
  },
  {
    title: "csgo-community",
    image: csgoImg,
    description:
      "CT aur T dono camps ke liye dedicated chatrooms! Pro strats, nade lineups aur funny eco round moments – yahan sab milega. CSGO lovers ke liye perfect hangout.",
    api: `${BASE_API}/community/csgo`,
  },
  {
    title: "coc-community",
    image: cocImg,
    description:
      "Base designs aur attack strategies discuss karo, apna clan promote karo aur naye warriors recruit karo. Clashers ke liye ultimate adda!",
    api: `${BASE_API}/community/coc`,
  },
  {
    title: "brawlstars-community",
    image: brawlImg,
    description:
      "Quick matches aur fun banter ke liye ek jagah! Best brawlers aur new comps par chat karo aur apne highlights share karo. Fast-paced aur full masti wali community.",
    api: `${BASE_API}/community/brawlstars`,
  },
];

export const TournamentsCarouselData = [
  {
    title: "bgmi-tournament",
    image: pubgImg,
    description:
      "BGMI tournaments – solo aur squad dono formats! Har season ke saath naye maps aur naye rules. Register karo aur dikhao asli survival skills.",
    api: `${BASE_API}/tournaments/bgmi`,
  },
  {
    title: "valorant-tournament",
    image: valorantImg,
    description:
      "Valorant ke competitive brackets! 5v5 battles, pro-style maps aur cash rewards. Har round ek naya clutch moment laata hai – team banao aur Radiant tak chhodo.",
    api: `${BASE_API}/tournaments/valorant`,
  },
  {
    title: "csgo-tournament",
    image: csgoImg,
    description:
      "CSGO competitive leagues aur weekend cups! Har match ek chance hai apne reflex aur nade strats dikhane ka. Register karo aur ban jao clutch king.",
    api: `${BASE_API}/tournaments/csgo`,
  },
  {
    title: "coc-tournament",
    image: cocImg,
    description:
      "Clan wars aur tournament-style attacks! Base defense aur smart raids decide karte hain jeet. Apni clan ke saath register karo aur leaderboard dominate karo.",
    api: `${BASE_API}/tournaments/coc`,
  },
  {
    title: "brawlstars-tournament",
    image: brawlImg,
    description:
      "Fast-paced 3v3 matches, new modes aur intense finals! Har brawler ka combo matter karta hai. Enter karo aur jeeto bragging rights (aur prizes!).",
    api: `${BASE_API}/tournaments/brawlstars`,
  },
];
