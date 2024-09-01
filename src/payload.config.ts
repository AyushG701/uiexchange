import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { Users } from "./collections/Users";

import dotenv from "dotenv";
import { Products } from "./collections/Products/Products";
import { Media } from "./collections/Media";
import { Orders } from "./collections/Orders";
import { ProductFiles } from "./collections/ProductFile";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Products, Media, Orders, ProductFiles],
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "-UIExchange",
      favicon: "/fabicon.ico",
      ogImage: "thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 2000, //it is 500 by default but we use this for the testing as we can change it in the production
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
