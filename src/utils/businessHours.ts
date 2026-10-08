/**
 * Business hours and real-time open/closed status calculation for Greece timezone
 */

export interface ScheduleDay {
  dayName: string;
  dayShort: string;
  hours: string;
  isOpenDay: boolean;
  openHour?: number;
  openMinute?: number;
  closeHour?: number;
  closeMinute?: number;
}

export const BUSINESS_SCHEDULE: ScheduleDay[] = [
  { dayName: 'Κυριακή', dayShort: 'Κυρ', hours: 'Κλειστά', isOpenDay: false },
  { dayName: 'Δευτέρα', dayShort: 'Δευ', hours: 'Κλειστά', isOpenDay: false },
  { dayName: 'Τρίτη', dayShort: 'Τρι', hours: '10:00 – 20:00', isOpenDay: true, openHour: 10, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { dayName: 'Τετάρτη', dayShort: 'Τετ', hours: '10:00 – 20:00', isOpenDay: true, openHour: 10, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { dayName: 'Πέμπτη', dayShort: 'Πεμ', hours: '10:00 – 20:00', isOpenDay: true, openHour: 10, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { dayName: 'Παρασκευή', dayShort: 'Παρ', hours: '10:00 – 20:00', isOpenDay: true, openHour: 10, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { dayName: 'Σάββατο', dayShort: 'Σαβ', hours: '10:00 – 15:00', isOpenDay: true, openHour: 10, openMinute: 0, closeHour: 15, closeMinute: 0 },
];

export function getGreekCurrentTime(): { dayOfWeek: number; hours: number; minutes: number; dateString: string } {
  const now = new Date();
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Athens',
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });
    const parts = formatter.formatToParts(now);
    let hours = now.getHours();
    let minutes = now.getMinutes();

    parts.forEach(p => {
      if (p.type === 'hour') hours = parseInt(p.value, 10);
      if (p.type === 'minute') minutes = parseInt(p.value, 10);
    });

    const dayFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Athens',
      weekday: 'narrow',
    });
    // Or day of week via athens date string
    const athensDateStr = now.toLocaleString('en-US', { timeZone: 'Europe/Athens' });
    const athensDate = new Date(athensDateStr);
    const dayOfWeek = athensDate.getDay();

    return {
      dayOfWeek,
      hours,
      minutes,
      dateString: now.toLocaleTimeString('el-GR', { timeZone: 'Europe/Athens', hour: '2-digit', minute: '2-digit' }),
    };
  } catch {
    return {
      dayOfWeek: now.getDay(),
      hours: now.getHours(),
      minutes: now.getMinutes(),
      dateString: `${now.getHours()}:${now.getMinutes()}`,
    };
  }
}

export function getCurrentShopStatus(): { isOpen: boolean; message: string; subMessage: string } {
  const { dayOfWeek, hours, minutes } = getGreekCurrentTime();
  const currentMinutes = hours * 60 + minutes;
  const todaySchedule = BUSINESS_SCHEDULE[dayOfWeek];

  if (!todaySchedule.isOpenDay || !todaySchedule.openHour || !todaySchedule.closeHour) {
    // Check when it opens next
    const nextOpen = dayOfWeek === 0 ? 'Τρίτη στις 10:00' : (dayOfWeek === 1 ? 'Τρίτη στις 10:00' : 'Αύριο στις 10:00');
    return {
      isOpen: false,
      message: 'Κλειστά τώρα',
      subMessage: `Επόμενο άνοιγμα: ${nextOpen}`,
    };
  }

  const openTime = todaySchedule.openHour * 60 + (todaySchedule.openMinute || 0);
  const closeTime = todaySchedule.closeHour * 60 + (todaySchedule.closeMinute || 0);

  if (currentMinutes >= openTime && currentMinutes < closeTime) {
    const remainingMinutes = closeTime - currentMinutes;
    const hoursLeft = Math.floor(remainingMinutes / 60);
    const minsLeft = remainingMinutes % 60;
    const closeStr = `${todaySchedule.closeHour}:00`;
    return {
      isOpen: true,
      message: 'Ανοιχτά τώρα',
      subMessage: `Κλείνει στις ${closeStr}${hoursLeft > 0 ? ` (σε ${hoursLeft}ω ${minsLeft > 0 ? `${minsLeft}λ` : ''})` : ` (σε ${minsLeft}λ)`}`,
    };
  } else if (currentMinutes < openTime) {
    return {
      isOpen: false,
      message: 'Κλειστά τώρα',
      subMessage: `Ανοίγει σήμερα στις ${todaySchedule.openHour}:00`,
    };
  } else {
    const nextDay = (dayOfWeek + 1) % 7;
    const nextSchedule = BUSINESS_SCHEDULE[nextDay];
    const nextOpen = nextSchedule.isOpenDay ? `Αύριο στις ${nextSchedule.openHour}:00` : 'Τρίτη στις 10:00';
    return {
      isOpen: false,
      message: 'Κλειστά τώρα',
      subMessage: `Επόμενο άνοιγμα: ${nextOpen}`,
    };
  }
}
