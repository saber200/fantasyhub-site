const site = {
  version: "0.1.15",
  fileName: "FantasyHub_0.1.15_x64-setup.exe",
  downloadUrl:
    "https://github.com/saber200/handheld-launcher/releases/download/v0.1.15/FantasyHub_0.1.15_x64-setup.exe",
};

const download = document.querySelector("#download");
download.href = site.downloadUrl;
download.download = site.fileName;

document.querySelector("#version").textContent = `版本 ${site.version} · Windows 64 位`;
