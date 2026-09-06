"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function PhotoGallery({ images, title = "Photo journal" }) {
  const [selected, setSelected] = useState(null),
    [count, setCount] = useState(18),
    [failed, setFailed] = useState(false);
  const dialog = useRef(null),
    opener = useRef(null),
    touch = useRef(null);
  const open = selected !== null;
  function show(index) {
    if (!open) opener.current = document.activeElement;
    setSelected(index);
    setFailed(false);
  }
  function close() {
    setSelected(null);
    setFailed(false);
  }
  function move(direction) {
    setSelected((i) => Math.max(0, Math.min(images.length - 1, i + direction)));
    setFailed(false);
  }
  useEffect(() => {
    if (!open) return;
    const el = dialog.current,
      previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!el.open) el.showModal();
    return () => {
      el.close();
      document.body.style.overflow = previous;
      opener.current?.focus();
    };
  }, [open]);
  return (
    <>
      <div className="photo-masonry">
        {images.slice(0, count).map((image, index) => (
          <button
            key={`${image.preview}-${index}`}
            className={`photo-tile tile-${index % 5}`}
            onClick={() => show(index)}
            aria-label={`Open ${title}, photo ${index + 1} of ${images.length}`}
          >
            <Image
              src={image.preview}
              alt={`${image.alt || title}, photograph ${index + 1}`}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
              quality={80}
            />
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      {count < images.length && (
        <div className="more-photos">
          <button
            onClick={() => setCount((n) => Math.min(n + 18, images.length))}
          >
            More photographs <span aria-hidden="true">↓</span>
          </button>
          <p>
            {count} of {images.length}
          </p>
        </div>
      )}
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label={
          open ? `${title}, photo ${selected + 1} of ${images.length}` : title
        }
        onCancel={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            move(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            move(-1);
          }
        }}
      >
        {open && (
          <>
            <div className="viewer-top">
              <span>{title}</span>
              <button onClick={close} aria-label="Close photo viewer" autoFocus>
                ×
              </button>
            </div>
            <div
              className="viewer-image"
              onTouchStart={(e) => {
                touch.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touch.current !== null) {
                  const delta = e.changedTouches[0].clientX - touch.current;
                  if (Math.abs(delta) > 60) move(delta < 0 ? 1 : -1);
                  touch.current = null;
                }
              }}
            >
              {failed ? (
                <p>This photograph couldn’t be loaded. Try the next one.</p>
              ) : (
                <Image
                  key={selected}
                  src={images[selected].preview}
                  alt={`${images[selected].alt || title}, photograph ${selected + 1}`}
                  fill
                  sizes="95vw"
                  quality={90}
                  onError={() => setFailed(true)}
                />
              )}
            </div>
            <div className="viewer-bottom">
              <button
                onClick={() => move(-1)}
                disabled={selected === 0}
                aria-label="Previous photograph"
              >
                ←
              </button>
              <span aria-live="polite">
                {String(selected + 1).padStart(2, "0")} / {images.length}
              </span>
              <button
                onClick={() => move(1)}
                disabled={selected === images.length - 1}
                aria-label="Next photograph"
              >
                →
              </button>
              {images[selected].full && (
                <a
                  href={images[selected].full}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View original ↗
                </a>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
