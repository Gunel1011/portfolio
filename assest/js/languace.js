window.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector(".language");

  async function local(language) {
    try {
      const response = await fetch(`./assest/language/${language}.json`);
      if (!response.ok) throw new Error("Fayl tapılmadı");
      const data = await response.json();

      Object.keys(data).forEach((key) => {
        const element = document.querySelector(`[data-language="${key}"]`);
        if (element) {
          element.textContent = data[key];
        }
      });
    } catch (error) {
      console.error("Xəta baş verdi:", error);
    }
  }

  local("en");

  select.addEventListener("change", (e) => {
    local(e.target.value);
  });
});
