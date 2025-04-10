import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../../data/BusHN/dataBus06"; // Cập nhật đường dẫn tùy theo cấu trúc thư mục của bạn.

const AlbumGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // Custom styles for the Modal (optional if CSS works)
  const customStyles = {
    blanket: (base) => ({
      ...base,
      zIndex: 50, // Ensure it appears above other elements
    }),
    dialog: (base) => ({
      ...base,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    view: (base) => ({
      ...base,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <Gallery
          photos={photos}
          onClick={openLightbox}
          direction="row"
          margin={4}
          targetRowHeight={200}
          imagePadding={10}
        />
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} styles={customStyles}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default AlbumGallery;