import midwestAccessImage from "../assets/midwest_acces.png";
import hometownHypeImage from "../assets/hometown_hype.png";
import madeForTheOutdoorsImage from "../assets/made_for_the_outdoors.png";

// Use type: "external" for a new-tab link, or an embed type for the modal.
// For the 2027 episode, change the final entry to type: "youtube" and set
// url to the episode URL and embedUrl to https://www.youtube-nocookie.com/embed/VIDEO_ID.
// Remove comingSoon and update action when the episode is ready.
export const newsFeatures = [
  {
    id: "midwest-access",
    source: "KTTC – Midwest Access",
    title: "Ty's Ginseng Featured on Midwest Access",
    thumbnail: midwestAccessImage,
    thumbnailAlt: "Ty's Ginseng featured on Midwest Access",
    type: "external",
    url: "https://www.kttc.com/video/2026/10/09/midwest-access-tys-ginseng-morristown-mn/",
    action: "Watch the feature",
  },
  {
    id: "facebook-video",
    source: "Hometown Hype",
    title: "Ty's Ginseng Featured by Hometown Hype",
    thumbnail: hometownHypeImage,
    thumbnailAlt: "Ty's Ginseng featured by Hometown Hype",
    type: "facebook-video",
    url: "https://www.facebook.com/reel/1091387323643780/",
    embedHref: "https://www.facebook.com/watch/?v=1091387323643780",
    action: "Watch the video",
    vertical: false,
  },
  {
    id: "made-for-the-outdoors",
    source: "Made for the Outdoors",
    title: "Ty's Ginseng – Made for the Outdoors",
    thumbnail: madeForTheOutdoorsImage,
    thumbnailAlt: "Ty's Ginseng featured on Made for the Outdoors",
    type: "facebook-post",
    comingSoon: true,
    url: "https://www.facebook.com/madefortheoutdoors/posts/pfbid02iYUiaY1sbeS2kCrwEoQMyTheANrRY7Kr53cGPfbgFjFxPyNbYURPekFiD14C6Zvtl",
    action: "Coming soon",
  },
];

export function getEmbedUrl(feature, dimensions = { width: 400, height: 711 }) {
  if (feature.type === "facebook-video") {
    return `https://www.facebook.com/plugins/video.php?${new URLSearchParams({
      href: feature.embedHref || feature.url,
      show_text: "false",
      autoplay: "false",
      allowfullscreen: "true",
      width: String(dimensions.width),
      height: String(dimensions.height),
    })}`;
  }
  if (feature.type === "facebook-post") {
    return `https://www.facebook.com/plugins/post.php?${new URLSearchParams({
      href: feature.url, show_text: "true", width: String(dimensions?.width || 500),
    })}`;
  }
  return feature.embedUrl;
}
