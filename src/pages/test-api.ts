import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({  }) => {
  // aftwards, github will redirect us to our redirect function, which will then redirect to the correct hostname
  return new Response("All ok: " + Date.now());
};