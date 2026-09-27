const site = {
  version: "0.1.13",
  fileName: "FantasyHub_0.1.13_x64-setup.exe",
  downloadUrl:
    "https://github.com/saber200/handheld-launcher/releases/download/v0.1.13/FantasyHub_0.1.13_x64-setup.exe",
  releasesUrl: "https://github.com/saber200/handheld-launcher/releases",
};

const download = document.querySelector("#download");
download.href = site.downloadUrl;
download.download = site.fileName;

document.querySelector("#version").textContent = `版本 ${site.version} · Windows 64 位`;
document.querySelector("#releases").href = site.releasesUrl;
