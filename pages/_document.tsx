import { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint, so there is no flash of the wrong theme and
// reveal animations never hide content on connections that can't afford them.
// data-motion: "full" | "lite" (slow network, data saver, low memory) | "reduced" (OS setting)
const bootScript = `(function () {
  var d = document.documentElement;
  var t = null;
  try { t = localStorage.getItem("theme"); } catch (e) {}
  if (t !== "light" && t !== "dark") {
    t = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  d.setAttribute("data-theme", t);

  var reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  function tier() {
    if (reduceQuery.matches || !("IntersectionObserver" in window)) return "reduced";
    var c = navigator.connection || {};
    if (c.saveData || /(^|-)2g|3g/.test(c.effectiveType || "")) return "lite";
    if (navigator.deviceMemory && navigator.deviceMemory < 2) return "lite";
    return "full";
  }
  function apply() { d.setAttribute("data-motion", tier()); }
  apply();
  if (navigator.connection && navigator.connection.addEventListener) {
    navigator.connection.addEventListener("change", apply);
  }
  if (reduceQuery.addEventListener) reduceQuery.addEventListener("change", apply);
  if (!("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.setAttribute("data-revealed", "");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  function scan(root) {
    root.querySelectorAll("[data-reveal]:not([data-revealed])").forEach(function (el) { io.observe(el); });
  }
  document.addEventListener("DOMContentLoaded", function () {
    scan(document);
    new MutationObserver(function (records) {
      records.forEach(function (r) {
        r.addedNodes.forEach(function (n) {
          if (n.nodeType !== 1) return;
          if (n.matches("[data-reveal]:not([data-revealed])")) io.observe(n);
          scan(n);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  });
})();`;

export default function Document() {
  return (
    <Html lang="en" data-theme="dark" data-motion="reduced">
      <Head>
        <meta name="google-site-verification" content="xmESV8vBZf81eyCYnWDjLE_vhIqtb9Pj54geaGT2NQI" />
        <meta name="theme-color" content="#08090d" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f7f8fa" media="(prefers-color-scheme: light)" />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
