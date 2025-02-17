import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ImageGallery.module.scss';
import ImageViewer from '@components/ImageViewer';
import Section from '@shared/Section';
import generateImageUrl from '@/utils/generateImageUrl';

const cx = classNames.bind(styles);

export default function ImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const open = selectedIndex > -1;

  const handleSelectedImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(-1);
  };

  return (
    <>
      <Section title='사진첩'>
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => handleSelectedImage(idx)}
            >
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: src,
                    format: 'webp',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  type='image/webp'
                ></source>
                <img
                  src={generateImageUrl({
                    filename: src,
                    format: 'jpg',
                    option: 'w_240,h_240,q_auto,c_fill',
                  })}
                  alt='사진첩 이미지'
                />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIndex={selectedIndex}
        onClose={handleClose}
      />
    </>
  );
}
