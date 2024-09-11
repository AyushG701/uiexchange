// the name must be route.tsx forced by nextjs to handle the api request
import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // @ts-expect-error context already passed from the express middleware
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
