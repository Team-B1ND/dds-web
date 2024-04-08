import dayjs, { ConfigType } from "dayjs";

class DateTransform {
  public hyphen(date?: ConfigType): string {
    return dayjs(date).format("YYYY-MM-DD");
  }

  public period(date?: ConfigType): string {
    return dayjs(date).format("YYYY.MM.DD");
  }

  public slash(date?: ConfigType): string {
    return dayjs(date).format("YYYY/MM/DD");
  }

  public fullDateWithHourAndSecond(date?: ConfigType): string {
    return dayjs(date).format("YYYY-MM-DD HH:mm");
  }

  public fullDateWithAll(date?: ConfigType): string {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
  }

  public customDate(formatStyle: string, date?: ConfigType): string {
    return dayjs(date).format(formatStyle);
  }
}

export default new DateTransform();
