// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  contact: {
    js: "./src/pages/contact", // 页面入口js
    html: "./src/pages/contact/index.html", // 页面使用的html模板
    out: "contact.html", // 输出目录中的页面文件名
  },
  article: {
    js: "./src/pages/article", // 页面入口js
    html: "./src/pages/article/index.html", // 页面使用的html模板
    out: "article.html", // 输出目录中的页面文件名
  },
  doctor: {
    js: "./src/pages/doctor", // 页面入口js
    html: "./src/pages/doctor/index.html", // 页面使用的html模板
    out: "doctor.html", // 输出目录中的页面文件名
  },
};
