import Papa from "papaparse";

const api = {
  links: {
    fetch: async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDPOedAPhtlcGLHWYya2YrivGSO_kOFqxphmZVvrPwNvPsV9x2uS1xivqJ6xcvvXL-m967vUIgRy2T/pub?gid=0&output=csv"
      );
      const data = await res.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, {
          header: true,
          complete: resolve,
          error: reject,
        });
      });

      console.log(parsed);
      return parsed.data;
    },
  },
};

export default api;
