import { Hono } from "hono";


const app = new Hono()
    .get("/health", (c) => {
        return c.json({ health: 'ok' });
    }
)

export type AppType = typeof app;
export default app;
