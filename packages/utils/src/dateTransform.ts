import dayjs from "dayjs";

class DateTransform {
  public hyphen(date?: string): string {
    return dayjs(date).format("YYYY-MM-DD");
  }

  public period(date?: string): string {
    return dayjs(date).format("YYYY.MM.DD");
  }

  public slash(date?: string): string {
    return dayjs(date).format("YYYY/MM/DD");
  }

  public fullDate(date?: string): string {
    return dayjs(date).format("YYYY-MM-DD HH:mm");
  }

  public customDate(date?: string, formatStyle?: string): string {
    return dayjs(date).format(formatStyle);
  }
}

export default new DateTransform();
