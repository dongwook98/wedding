import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import { Wedding } from '@models/wedding';
import FullScreenMessage from '@shared/FullScreenMessage';
import Heading from '@components/sections/Heading';
import Video from '@components/sections/Video';
import ImageGallery from '@components/sections/ImageGallery';
import Intro from '@components/sections/Intro';
import Invitation from './components/sections/Invitation';
import Calendar from './components/sections/Calendar';
import Map from './components/sections/Map';
import Contact from './components/sections/Contact';
import Share from './components/sections/Share';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        // fetch는 404에러를 만나면 에러를 리젝하지 않아서 명시적으로 에러를 throw해야함
        if (response.ok === false) {
          throw new Error('청접장 정보를 불러오지 못했습니다.');
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((e) => {
        console.log('에러발생', e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type='loading' />;
  }

  if (error) {
    return <FullScreenMessage type='error' />;
  }

  if (wedding == null) {
    return null;
  }

  const { date, galleryImages, groom, bride, location, message } = wedding;

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <ImageGallery images={galleryImages} />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        date={date}
        locationName={location.name}
        message={message.intro}
      />
      <Invitation message={message.invitation} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
    </div>
  );
}

export default App;
