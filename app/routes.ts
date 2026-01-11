import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("innhold", "routes/innhold.tsx", [
    index("routes/meny.tsx"),
    route("om", "routes/om.tsx"),
    route("kontakt", "routes/kontakt.tsx"),
    route("erfaring", "routes/erfaring.tsx"),
    route("utdanning", "routes/utdanning.tsx"),
  ]),
] satisfies RouteConfig;
