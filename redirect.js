/* 보안서약서 작성 화면은 SeMIS v2(semis.pe.kr/pledge.html)로 옮겼다 (2026-09-27). 기존 QR · 링크는 여기서 이동한다. */
(function () {
  var q = /[?&]lang=(ko|en)\b/i.exec(location.search || "");
  location.replace("https://semis.pe.kr/pledge.html" + (q ? "?lang=" + q[1].toLowerCase() : ""));
})();
