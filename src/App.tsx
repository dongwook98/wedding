import classNames from 'classnames/bind';

import styles from './App.module.scss';
import FullScreenMessage from '@shared/FullScreenMessage';
import Heading from '@components/sections/Heading';
import Video from '@components/sections/Video';
import ImageGallery from '@components/sections/ImageGallery';
import Intro from '@components/sections/Intro';
import Invitation from '@components/sections/Invitation';
import Calendar from '@components/sections/Calendar';
import Map from '@components/sections/Map';
import Contact from '@components/sections/Contact';
import Share from '@components/sections/Share';
import AttendCountModal from '@components/AttendCountModal';
import useWedding from './hooks/useWedding';

const cx = classNames.bind(styles);

function App() {
  // 추상화
  const { wedding, loading, error } = useWedding();

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
      <AttendCountModal wedding={wedding} />
    </div>
  );
}

export default App;
