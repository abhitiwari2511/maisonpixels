  import projectsFallback from "@/data/projects.json";

  export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    url: string;
  }

  const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const SANITY_API_VERSION = "2023-05-03";

  export async function getProjects(): Promise<Project[]> {
    // If Sanity environment variables are provided, fetch live projects from Sanity API
    if (SANITY_PROJECT_ID) {
      try {
        const query = encodeURIComponent(
          '*[_type == "project"]{ "id": _id, title, category, "image": image.asset->url, description, url }'
        );
        const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${query}`;

        const res = await fetch(url, { next: { revalidate: 60 } });
        if (!res.ok) throw new Error("Failed to fetch from Sanity");

        const data = await res.json();
        if (data.result && data.result.length > 0) {
          return data.result;
        }
      } catch (err) {
        console.warn("Sanity fetch failed, using fallback projects data:", err);
      }
    }

    // Fallback seamlessly to local projects.json data if Sanity is not connected yet
    return projectsFallback as Project[];
  }
