import { PropsWithChildren, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Accordion.module.scss';

const cx = classNames.bind(styles);

// <Accordion label='신랑측'>컨텐츠</Accordion>

interface AccordionProps {
  label: string;
}

export default function Accordion({
  label,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={cx(['wrap-accordion', expanded ? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  );
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg
      className={className}
      id='Layer_1'
      version='1.1'
      viewBox='0 0 50 50'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect fill='none' height='50' width='50' />
      <polygon points='47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 ' />
    </svg>
  );
}
