import { postsRouter } from "~/server/api/routers/posts";

import { createTRPCRouter } from "~/server/api/trpc";


export const appRouter = createTRPCRouter({
  
  posts: postsRouter
});


export type AppRouter = typeof appRouter;
