import { nextActionMiddleware } from "./nextActions";
import { contextsMiddleware } from "./contexts";
import { projectsMiddleware } from "./projects";

export const featureMiddleware = [
  contextsMiddleware,
  projectsMiddleware,
  nextActionMiddleware,
];
