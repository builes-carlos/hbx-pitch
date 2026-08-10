(function () {
  var PASSWORD = "builes.carlos";
  var STORAGE_KEY = "site_unlocked_v1:" + (location.pathname.split("/")[1] || "root");

  if (localStorage.getItem(STORAGE_KEY) === "1") return;

  document.documentElement.style.visibility = "hidden";

  document.addEventListener("DOMContentLoaded", function () {
    var overlay = document.createElement("div");
    overlay.style.cssText =
      "position:fixed;inset:0;background:#07080B;color:#fff;display:flex;" +
      "align-items:center;justify-content:center;z-index:2147483647;" +
      "font-family:'Hanken Grotesk',system-ui,-apple-system,sans-serif;";
    overlay.innerHTML =
      '<form id="gate-form" style="background:#0B0D12;border:1px solid rgba(255,255,255,.10);padding:2rem;border-radius:16px;width:90%;max-width:340px;box-shadow:0 25px 60px -15px rgba(0,0,0,.7);">' +
      '<div style="font-weight:800;font-size:1.05rem;margin-bottom:.35rem;">HBX</div>' +
      '<label style="display:block;margin-bottom:.9rem;font-size:.9rem;color:#94a3b8;">Documento privado. Ingresa la contraseña.</label>' +
      '<input id="gate-input" type="password" autocomplete="off" style="width:100%;padding:.65rem .8rem;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:#07080B;color:#fff;font-size:1rem;box-sizing:border-box;">' +
      '<button type="submit" style="width:100%;margin-top:1rem;padding:.65rem;border:none;border-radius:10px;background:#6E8BFF;color:#0a0a12;font-weight:700;cursor:pointer;font-size:.95rem;">Entrar</button>' +
      '<div id="gate-error" style="color:#f87171;font-size:.85rem;margin-top:.6rem;display:none;">Contraseña incorrecta</div>' +
      "</form>";
    document.body.appendChild(overlay);
    document.documentElement.style.visibility = "visible";

    var form = document.getElementById("gate-form");
    var input = document.getElementById("gate-input");
    var error = document.getElementById("gate-error");
    input.focus();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === PASSWORD) {
        localStorage.setItem(STORAGE_KEY, "1");
        overlay.remove();
      } else {
        error.style.display = "block";
        input.value = "";
        input.focus();
      }
    });
  });
})();
