import {
  FaBicycle,
  FaCarSide,
  FaChartLine,
  FaExchangeAlt,
  FaParking,
  FaRoad,
  FaRoute,
  FaVideo
} from "react-icons/fa";
import { images } from "./images";

export const services = [
  {
    slug: "turning-movement-counts",
    title: "Turning Movement Counts",
    icon: FaExchangeAlt,
    image: images.serviceTmc,
    summary: "Classified turn counts for junctions, roundabouts, and signalized intersections.",
    details:
      "Our analysts extract lane-by-lane turning movements by vehicle class, time interval, and client-defined direction coding. Outputs can be delivered in Excel, CSV, PDF summary tables, or your internal template."
  },
  {
    slug: "queue-length-studies",
    title: "Queue Length Studies",
    icon: FaRoad,
    image: images.serviceQueue,
    summary: "Queue buildup, dissipation, and maximum queue observations from video footage.",
    details:
      "We track queue formation across peak and off-peak windows, including signal cycles, approach legs, lane groups, and unusual site events that affect traffic flow."
  },
  {
    slug: "pedestrian-cyclist-counts",
    title: "Pedestrian & Cyclist Counts",
    icon: FaBicycle,
    image: images.servicePedestrian,
    summary: "Movement-based pedestrian and cyclist counts for active travel studies.",
    details:
      "ATD Analysis supports crossing counts, path usage, desire lines, gender or age bands where requested, cyclist classification, and multi-modal reporting across international survey standards."
  },
  {
    slug: "anpr-number-plate-surveys",
    title: "ANPR / Number Plate Surveys",
    icon: FaVideo,
    image: images.serviceAnpr,
    summary: "Secure number plate transcription and matching for journey-time and OD studies.",
    details:
      "We handle time-stamped plate capture, data cleaning, partial plate matching, privacy-aware workflows, and client-specific confidence rules for ANPR survey processing."
  },
  {
    slug: "parking-studies",
    title: "Parking Studies",
    icon: FaParking,
    image: images.serviceParking,
    summary: "Occupancy, duration, turnover, and illegal parking observations.",
    details:
      "Our team processes car parks, kerbside parking, loading bays, and permit areas with interval-based occupancy dashboards and clearly documented assumptions."
  },
  {
    slug: "speed-volume-studies",
    title: "Speed & Volume Studies",
    icon: FaChartLine,
    image: images.serviceSpeedVolume,
    summary: "Classified volume and speed observations for network planning and safety work.",
    details:
      "We classify vehicles, summarize flow by interval, flag outliers, and prepare clean datasets that can feed directly into modelling, safety audits, and transport planning reports."
  },
  {
    slug: "gap-headway-analysis",
    title: "Gap & Headway Analysis",
    icon: FaCarSide,
    image: images.hero,
    summary: "Precise vehicle gap and headway measurement for capacity and priority studies.",
    details:
      "We measure accepted and rejected gaps, vehicle headways, turning opportunities, and site-specific notes for roundabouts, priority junctions, crossings, and merging areas."
  },
  {
    slug: "origin-destination-studies",
    title: "Origin-Destination Studies",
    icon: FaRoute,
    image: images.serviceOriginDestination,
    summary: "Matched vehicle, pedestrian, or cyclist movements across survey points.",
    details:
      "Our OD workflows combine timestamp matching, direction coding, trip matrices, and QA review to help clients understand route choice, circulation, and site demand."
  }
];
