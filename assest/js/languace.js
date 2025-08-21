window.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".language select");

  async function local(language) {
    try {
      const response = await fetch(`./assest/language/${language}.json`);
      if (!response.ok) throw new Error("Fayl tapılmadı");
      const data = await response.json();

      Object.keys(data).forEach((key) => {
        const elements = document.querySelectorAll(
          `[data-language="${key}"]`
        );
        elements.forEach((el) => {
          el.textContent = data[key];
        });
      });
    } catch (error) {
      console.error("Xəta baş verdi:", error);
    }
  }
  local("en");
  if (select) {
    select.addEventListener("change", (e) => {
      const value = String(e.target.value || "en").toLowerCase();
      local(value);
    });
  }
});
