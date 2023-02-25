import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server"; // react router in node
import App from "./App";

export default function render(url, opts) {
  const steam = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );

  return steam;
}
