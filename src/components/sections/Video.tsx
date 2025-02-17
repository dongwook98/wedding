import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

export default function Video() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster='/assets/poster.jpg'
      >
        <source src='/assets/main.webm' type='video/webm'></source>
        {/* webm 지원안하는 브라우저를 위한 폴백 mp4 지원 */}
        <source src='/assets/main.mp4' type='video/mp4'></source>
      </video>
    </Section>
  );
}
