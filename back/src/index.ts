import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
  }
}>();

app.use('/api/*', cors())
  

app.post("/api/v1/formData", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    await prisma.form.create({
      data: {
        name: body.name,
        email: body.email,
        query: body.query
      }
    });

    await prisma.$disconnect();

    return c.text("successfully submitted");
  } catch (error) {
    console.error("Error while processing form data:", error);
    return c.json({msg:"Internal Server Error"});
  }
});

export default app;
