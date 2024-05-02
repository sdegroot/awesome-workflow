import { getCollection } from "astro:content";


export const systemDocs = await getCollection(
    "docs",
    (e) => !!e.data.system
  );
  