const formatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const today = formatter.format(new Date());
const days = [...document.querySelectorAll(".day")];
const todaySection = days.find((day) => day.dataset.date === today);

if (todaySection) {
  todaySection.classList.add("is-today");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
