import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import classNames from 'classnames/bind';

import './swiper.css';
import styles from './ImageViewer.module.scss';

const cx = classNames.bind(styles);

export default function ImageViewer({
  images,
  open = false,
  selectedIndex,
  onClose,
}: {
  images: string[];
  open: boolean;
  selectedIndex: number;
  onClose: () => void;
}) {
  if (open === false) {
    return null;
  }

  return (
    <div className={cx('dimmed')}>
      <CloseButton className={cx('ico-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={src} alt='이미지 뷰어' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

function CloseButton({
  className,
  onClose,
}: {
  className: string;
  onClose: () => void;
}) {
  return (
    <svg
      className={className}
      onClick={onClose}
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z' />
      <path d='M0 0h48v48h-48z' fill='none' />
    </svg>
  );
}
