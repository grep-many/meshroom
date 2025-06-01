import noSSR from "next/dynamic"; // renamed to avoid conflict

// Force dynamic rendering (disable SSG/SSR entirely)
export const dynamic = "force-dynamic";

/**
 * disable ssr to avoid pre-rendering issues of Next.js
 *
 * we're doing this because we're using a canvas element that can't be pre-rendered by Next.js on the server
 */
const App = noSSR(() => import("./App"), { ssr: false });

export default App;
