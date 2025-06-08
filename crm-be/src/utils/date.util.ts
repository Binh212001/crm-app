import dayjs from 'dayjs';

declare global {
  interface Date {
    getStartOfMonth(): Date;
    getStartOfPreviousMonth(): Date;
    getCurrentDate(): Date;
    getCurrentDatePreviousMonth(): Date;
    getDayDiffs(to: Date): number;
    addDate(daydiff: number): Date;
    getStartOfDay(): Date;
    getEndOfDay(): Date;
    getStartPeriodDate(date: Date, dayDiff: number): Date;
  }
}

Date.prototype.getStartOfMonth = function (): Date {
  return dayjs(this).startOf('month').toDate();
};

Date.prototype.getStartOfPreviousMonth = function (): Date {
  return dayjs(this).subtract(1, 'month').startOf('month').toDate();
};

Date.prototype.getCurrentDate = function (): Date {
  return dayjs().toDate();
};

Date.prototype.getCurrentDatePreviousMonth = function (): Date {
  return dayjs().subtract(1, 'month').toDate();
};

Date.prototype.getDayDiffs = function (to: Date): number {
  return dayjs(this).diff(dayjs(to), 'day');
};
Date.prototype.addDate = function (daydiff: number): Date {
  return dayjs().add(daydiff, 'day').toDate();
};

Date.prototype.getStartOfDay = function (): Date {
  return dayjs().startOf('day').toDate();
};

Date.prototype.getEndOfDay = function (): Date {
  return dayjs().endOf('day').toDate();
};

Date.prototype.getStartPeriodDate = function (
  date: Date,
  dayDiff: number,
): Date {
  return dayjs(date).subtract(dayDiff, 'day').toDate();
};

export {};
