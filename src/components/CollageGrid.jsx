export default function CollageGrid({ images }) {
  return (
    <div className="columns-1 gap-2 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="mb-2 break-inside-avoid overflow-hidden bg-neutral-900"
        >
          <img
            src={image.src}
            alt={`Gallery ${index + 1}`}
            className="h-auto w-full transition duration-300 hover:opacity-80"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}