export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: "https://dalronjrobertson.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://dalronjrobertson.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dalronjrobertson.com/work",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dalronjrobertson.com/writing",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://dalronjrobertson.com/life",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
