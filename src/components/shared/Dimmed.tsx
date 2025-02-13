import { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';

import styles from './Dimmed.module.scss';

const cx = classNames.bind(styles);

export default function Dimmed({ children }: PropsWithChildren) {
  return <div className={cx('dimmed')}>{children}</div>;
}
