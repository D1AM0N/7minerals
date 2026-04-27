import { MineralCategory, Operation } from "../types";

export const mineralCategories: MineralCategory[] = [
  {
    id: "cat-1",
    name: "Precious Metals",
    description: "High-value rare metallic chemical elements of high economic value.",
    representativeIcon: "Gem",
    color: "#C9922A", // gold
  },
  {
    id: "cat-2",
    name: "Base Metals",
    description: "Common and inexpensive metals as opposed to precious metals.",
    representativeIcon: "Layers",
    color: "#1A2D4A", // navy-mid
  },
  {
    id: "cat-3",
    name: "Energy Minerals",
    description: "Minerals used to produce energy, such as coal and uranium.",
    representativeIcon: "Zap",
    color: "#109655", // emerald-primary
  },
  {
    id: "cat-4",
    name: "Industrial Minerals",
    description: "Non-metallic minerals used in industrial processes and construction.",
    representativeIcon: "Hammer",
    color: "#F9F7F4", // stone
  }
];

export const operations: Operation[] = [
  {
    id: "op-1",
    name: "Kano Lithium Project",
    region: "North-West Nigeria",
    description: "Advanced exploration of lithium-bearing pegmatites to support the global battery supply chain.",
    status: "exploration",
  },
  {
    id: "op-2",
    name: "Jos Plateau Tin Mining",
    region: "North-Central Nigeria",
    description: "Active extraction and processing of high-grade tin and columbite deposits.",
    status: "active",
  },
  {
    id: "op-3",
    name: "Ogun Limestone Quarry",
    region: "South-West Nigeria",
    description: "Development of large-scale limestone extraction facilities for infrastructure growth.",
    status: "development",
  }
];
