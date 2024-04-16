// vite.config.ts
import { qwikCity } from "file:///C:/Users/Joris/Projects/io/qwik/node_modules/@builder.io/qwik-city/vite/index.mjs";
import { qwikVite } from "file:///C:/Users/Joris/Projects/io/qwik/node_modules/@builder.io/qwik/optimizer.mjs";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///C:/Users/Joris/Projects/io/qwik/node_modules/vite/dist/node/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Joris/Projects/io/qwik/vite.config.ts";
var vite_config_default = defineConfig(() => ({
  plugins: [qwikCity(), qwikVite({
    devTools: { clickToSource: false },
    entryStrategy: {
      type: "smart",
      manual: {
        ...bundle("load", [
          "s_rJEWSvSW7rY",
          "s_BknvJvmiXNA"
        ]),
        ...bundle("styles", [
          "s_X9SI4jHHwps",
          "s_WZDCvF9I7Io",
          "s_SqpMVBXCdqw"
        ])
      }
    }
  })],
  resolve: {
    alias: { "~": fileURLToPath(new URL("./src/components", __vite_injected_original_import_meta_url)) }
  }
}));
function bundle(bundleName, symbols) {
  return symbols.reduce((obj, key) => {
    obj[key.replace("s_", "")] = bundleName;
    return obj;
  }, {});
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKb3Jpc1xcXFxQcm9qZWN0c1xcXFxpb1xcXFxxd2lrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKb3Jpc1xcXFxQcm9qZWN0c1xcXFxpb1xcXFxxd2lrXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Kb3Jpcy9Qcm9qZWN0cy9pby9xd2lrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcXdpa0NpdHkgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay1jaXR5L3ZpdGVcIlxuaW1wb3J0IHsgcXdpa1ZpdGUgfSBmcm9tIFwiQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXJcIlxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4gKHtcbiAgICBwbHVnaW5zOiBbcXdpa0NpdHkoKSwgcXdpa1ZpdGUoe1xuICAgICAgICBkZXZUb29sczogeyBjbGlja1RvU291cmNlOiBmYWxzZSB9LFxuICAgICAgICBlbnRyeVN0cmF0ZWd5OiB7XG4gICAgICAgICAgICB0eXBlOiBcInNtYXJ0XCIsXG4gICAgICAgICAgICBtYW51YWw6IHtcbiAgICAgICAgICAgICAgICAuLi5idW5kbGUoJ2xvYWQnLCBbXG4gICAgICAgICAgICAgICAgICAgIFwic19ySkVXU3ZTVzdyWVwiLFxuICAgICAgICAgICAgICAgICAgICBcInNfQmtudkp2bWlYTkFcIlxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIC4uLmJ1bmRsZSgnc3R5bGVzJywgW1xuICAgICAgICAgICAgICAgICAgICBcInNfWDlTSTRqSEh3cHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzX1daREN2RjlJN0lvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic19TcXBNVkJYQ2Rxd1wiXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7IFwiflwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyYy9jb21wb25lbnRzXCIsIGltcG9ydC5tZXRhLnVybCkpIH1cbiAgICB9LFxufSkpXG5cbmZ1bmN0aW9uIGJ1bmRsZShidW5kbGVOYW1lOiBzdHJpbmcsIHN5bWJvbHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHN5bWJvbHMucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICBvYmpba2V5LnJlcGxhY2UoXCJzX1wiLCBcIlwiKV0gPSBidW5kbGVOYW1lOyByZXR1cm4gb2JqXG4gICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlIsU0FBUyxnQkFBZ0I7QUFDcFQsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxvQkFBb0I7QUFIb0osSUFBTSwyQ0FBMkM7QUFLbE8sSUFBTyxzQkFBUSxhQUFhLE9BQU87QUFBQSxFQUMvQixTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVM7QUFBQSxJQUMzQixVQUFVLEVBQUUsZUFBZSxNQUFNO0FBQUEsSUFDakMsZUFBZTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ0osR0FBRyxPQUFPLFFBQVE7QUFBQSxVQUNkO0FBQUEsVUFDQTtBQUFBLFFBQ0osQ0FBQztBQUFBLFFBQ0QsR0FBRyxPQUFPLFVBQVU7QUFBQSxVQUNoQjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDSixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFBQSxFQUNKLENBQUMsQ0FBQztBQUFBLEVBQ0YsU0FBUztBQUFBLElBQ0wsT0FBTyxFQUFFLEtBQUssY0FBYyxJQUFJLElBQUksb0JBQW9CLHdDQUFlLENBQUMsRUFBRTtBQUFBLEVBQzlFO0FBQ0osRUFBRTtBQUVGLFNBQVMsT0FBTyxZQUFvQixTQUFtQjtBQUNuRCxTQUFPLFFBQVEsT0FBTyxDQUFDLEtBQUssUUFBUTtBQUNoQyxRQUFJLElBQUksUUFBUSxNQUFNLEVBQUUsQ0FBQyxJQUFJO0FBQVksV0FBTztBQUFBLEVBQ3BELEdBQUcsQ0FBQyxDQUEyQjtBQUNuQzsiLAogICJuYW1lcyI6IFtdCn0K
