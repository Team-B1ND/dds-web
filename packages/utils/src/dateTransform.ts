import dayjs, { type ConfigType } from "dayjs";

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

  public fullDate(
    fullDateType: "HH" | "HH:mm" | "HH:mm:ss",
    date?: ConfigType
  ): string {
    return dayjs(date).format(`YYYY-MM-DD ${fullDateType || "HH:mm:ss"}`);
  }

  public customDate(formatStyle: string, date?: ConfigType): string {
    return dayjs(date).format(formatStyle);
  }
}

export default new DateTransform();
