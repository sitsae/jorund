import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("innhold", "routes/innhold.tsx", [
    index("routes/meny.tsx"),
    route("personlig", "routes/personlig.tsx"),
    route("profesjonelt", "routes/profesjonelt.tsx"),
    route("bidrag", "routes/bidrag.tsx"),
    route("motivasjon", "routes/motivasjon.tsx"),
  ]),
] satisfies RouteConfig;
