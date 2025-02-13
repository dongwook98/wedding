import classNames from 'classnames/bind';
import { parseISO, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import styles from './Calendar.module.scss';
import Section from '@shared/Section';

const cx = classNames.bind(styles);

const css = `
  .rdp-nav {
    display: none;
  }
  .rdp-month_caption {
    display: none;
  }
  .rdp-weekdays {
    font-size: 24px;
  }
  .rdp-weekday {
    font-weight: bold;
  }
  .rdp-day .rdp-day_button {
    cursor: default;
  }
  .rdp-selected .rdp-day_button {
    border: none;
    color: white;
    font-weight: bold;
    background: var(--red);
  }
  .rdp-selected .rdp-day_button:hover {
    background: var(--red);
  }
`;

export default function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date);
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-daypicker')}>
        <style>{css}</style>
        <DayPicker
          mode='single'
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          onSelect={() => {}}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  );
}
