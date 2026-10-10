import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getEmbedUrl } from "./newsFeatures";
import "../css/FeatureModal.css";

export default function FeatureModal({ feature, onClose }) {
  const dialogRef = useRef(null);
  const mediaRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState(null);
  const [embedDimensions, setEmbedDimensions] = useState(null);
  const [postWidth, setPostWidth] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);
  const usePostFallback = feature.type === "facebook-post" && isMobile;
  const titleId = useId();

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    if (feature.type !== "facebook-video") return;
    const media = mediaRef.current;
    let initializationTimer;
    let initialized = false;
    const observer = new ResizeObserver(() => {
      // Let the browser manage the fullscreen iframe without resizing it.
      if (document.fullscreenElement) return;
      const ratio = feature.vertical ? 9 / 16 : 16 / 9;
      const width = Math.floor(Math.min(media.clientWidth, media.clientHeight * ratio));
      const height = Math.ceil(width / ratio);
      if (!width || !height) return;
      setVideoDimensions((previous) =>
        previous?.width === width && previous?.height === height
          ? previous : { width, height });
      if (!initialized) {
        // The first observation can precede the modal's final layout. Wait
        // for sizing to settle so Facebook doesn't initialize a tiny player.
        clearTimeout(initializationTimer);
        initializationTimer = setTimeout(() => {
          initialized = true;
          // Keep this URL size fixed thereafter to preserve playback.
          setEmbedDimensions({ width, height });
        }, 100);
      }
    });
    observer.observe(media);
    return () => {
      observer.disconnect();
      clearTimeout(initializationTimer);
    };
  }, [feature.type, feature.vertical]);

  useEffect(() => {
    if (feature.type !== "facebook-post" || usePostFallback) return;
    const media = mediaRef.current;
    let resizeTimer;
    const observer = new ResizeObserver(() => {
      const width = Math.max(350, Math.min(500, Math.floor(media.clientWidth)));
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setPostWidth(width), 100);
    });
    observer.observe(media);
    return () => {
      observer.disconnect();
      clearTimeout(resizeTimer);
    };
  }, [feature.type, usePostFallback]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="feature-modal"
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right ||
              event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
        }
      }}
    >
      <header className="feature-modal-header">
        <div>
          <span className="feature-modal-source">{feature.source}</span>
          <h2 id={titleId}>{feature.title}</h2>
        </div>
        <button type="button" className="feature-modal-close" onClick={onClose} aria-label="Close feature" autoFocus>×</button>
      </header>
      <div ref={mediaRef} className={`feature-modal-media${feature.type === "facebook-post" ? " feature-modal-post" : ""}`}>
        {usePostFallback ? (
          <div className="feature-post-fallback">
            <img src={feature.thumbnail} alt={feature.thumbnailAlt} />
            <p>View this feature directly on Facebook.</p>
            <a href={feature.url} target="_blank" rel="noopener noreferrer" className="feature-post-link">
              Open on Facebook <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        ) : (feature.type === "facebook-video" ? videoDimensions && embedDimensions :
          feature.type === "facebook-post" ? postWidth : true) && <iframe
          src={getEmbedUrl(feature, feature.type === "facebook-post" ? { width: postWidth } : embedDimensions)}
          style={feature.type === "facebook-video" ? {
            width: videoDimensions.width,
            height: videoDimensions.height,
          } : feature.type === "facebook-post" ? { width: postWidth } : undefined}
          title={feature.title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />}
      </div>
      <footer className="feature-modal-footer">
        <span>{feature.type === "facebook-post" ? "Links in this post open Facebook." : "Having trouble viewing?"}</span>{" "}
        <a href={feature.url} target="_blank" rel="noopener noreferrer">Open the original feature ↗</a>
      </footer>
    </dialog>,
    document.body,
  );
}
