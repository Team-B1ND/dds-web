import dayjs, { type ConfigType } from "dayjs";

export class DateTransform {
  static hyphen(date?: ConfigType): string {
    return dayjs(date).format("YYYY-MM-DD");
  }

  static period(date?: ConfigType): string {
    return dayjs(date).format("YYYY.MM.DD");
  }

  static slash(date?: ConfigType): string {
    return dayjs(date).format("YYYY/MM/DD");
  }

  static fullDate(
    fullDateType: "HH" | "HH:mm" | "HH:mm:ss",
    date?: ConfigType
  ): string {
    return dayjs(date).format(`YYYY-MM-DD ${fullDateType || "HH:mm:ss"}`);
  }

  static customDate(formatStyle: string, date?: ConfigType): string {
    return dayjs(date).format(formatStyle);
  }
}
