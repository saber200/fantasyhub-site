const version = "0.1.17";

const site = {
  version,
  fileName: `FantasyHub_${version}_x64-setup.exe`,
  downloadUrl: `https://github.com/saber200/handheld-launcher/releases/download/v${version}/FantasyHub_${version}_x64-setup.exe`,
};

const download = document.querySelector("#download");
download.href = site.downloadUrl;
download.download = site.fileName;

document.querySelector("#version").textContent = `版本 ${site.version} · Windows 64 位`;
