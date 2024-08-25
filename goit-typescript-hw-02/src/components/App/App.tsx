import { useEffect, useState, MouseEvent, ChangeEvent, FormEvent } from "react";
import { Searchbar, ImageGallery, Button, Modal, Loader } from "../../components";
import Notiflix from "notiflix";
import { fetchImages } from "../../Services/pixabay-api";
import css from "./App.module.css";

// Типізація відповіді від функції fetchImages
interface Images {
  id: number;
  pageURL: string;
  type: "photo";
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views?: number;
  downloads?: number;
  collections?: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

// типізувати функції

// Типізація для помилок
type FetchError = {
  message: string;
};

export const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [images, setImages] = useState<Images[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");

  console.log(loadMore);
  console.log(error);

  useEffect(() => {
    if (!searchQuery) {
      return
    };

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetchImages(searchQuery, page);
        const newPhotos: Images[] = response.hits;
        const total = response.totalHits;
        
        console.log(response);
        console.log(response.hits);
        console.log(response.totalHits);

        if (response.hits.length === 0) {
          return Notiflix.Notify.failure("Sorry, no matches were identified with your query.");
        }

        setImages(prevPhotos => [...prevPhotos, ...newPhotos])
        setTotal(response.totalHits)
        setLoadMore(page < Math.ceil(total / 12))

      } catch (error) {
        const err = error as FetchError;
        setError(err.message);

      } finally {
        setIsLoading(false);

      };
    }
    
    fetchData();
  }, [searchQuery, page]);

  const handleSubmit = (searchQuery: string): void => {
    if (searchQuery.toLowerCase().trim() === "") {
      return Notiflix.Notify.failure("Unfortunately, there are no more images. You've reached the last page with search results.");
    }
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
  }

  const onLoadMore = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const showModal = (largeImageURL: string): void => {
    setIsModalVisible(true);
    setModalImage(largeImageURL);
  };

  const closeModal = (): void => {
    setIsModalVisible(false);
  };

  const qtyPages = total / images.length;
  const isImageGalleryVisible = images.length > 1;
  const isLoadMoreVisible = qtyPages > 1 && !isLoading && images.length !== 0;

  return (
    <div className={css.app}>

      <Searchbar onSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {isImageGalleryVisible &&
        <ImageGallery
          images={images}
          showModal={showModal}
        />
      }

      {isLoadMoreVisible && (
        <Button
          onLoadMore={onLoadMore}
          text={"Load more"}
        />
      )}

      {isModalVisible && (
        <Modal
          closeModal={closeModal}
          modalImage={modalImage}
        />
      )}
      
    </div>
  );
};