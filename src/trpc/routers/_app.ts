import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/database";

export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async ({ ctx }) => {

    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "test@test.com",
      },
    })

    return prisma.workflow.create({
      data: {
        name: "New Workflow",
      },
    });
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;
