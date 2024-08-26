import { publicProcedure, router } from "./trpc";
import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  createPayLoadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      // check if tye user is already exist or not
      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0)
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exist",
        });

      await payload.create({
        collection: "users",
        data: {},
      });
    }),
});
