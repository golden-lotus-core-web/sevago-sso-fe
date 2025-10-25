import { useEffect } from "react";

export const useVersionCheck = (options?: { interval?: number }) => {
  useEffect(() => {
    let currentVersion = localStorage.getItem("app_version");

    const checkVersion = async () => {
      try {
        const res = await fetch("/version.json", { cache: "no-store" });
        const data = await res.json();

        // Lần chạy đầu tiên: lưu version hiện tại
        if (!currentVersion) {
          localStorage.setItem("app_version", data.version);
          currentVersion = data.version;
          return;
        }

        // Nếu version mới khác → reload
        if (currentVersion !== data.version) {
          localStorage.setItem("app_version", data.version);
          window.location.reload();
        }
      } catch (err) {
        console.error("Failed to check version", err);
      }
    };

    checkVersion();

    if (options?.interval && options.interval > 0) {
      const timer = setInterval(checkVersion, options.interval);
      return () => clearInterval(timer);
    }
  }, [options?.interval]);
};
