import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import classNames from 'classnames/bind';

import './swiper.css';
import styles from './ImageViewer.module.scss';
import Dimmed from '@shared/Dimmed';
import generateImageUrl from '@/utils/generateImageUrl';

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
    <Dimmed>
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
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                  })}
                  type='image/webp'
                ></source>
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                  })}
                  alt='이미지 뷰어 이미지'
                />
              </picture>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Dimmed>
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
