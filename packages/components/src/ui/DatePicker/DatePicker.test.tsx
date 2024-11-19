import { render , screen} from "@testing-library/react";
import React from "react";
import {DodamDatePicker} from "./DodamDatePicker";

describe(`DatePicker`, () => {
  test("DatePicker 컴포넌트 렌더링 확인", () => {
    render(
      <DodamDatePicker
        width={200}
        height={12}
        itemKey={"testDatePicker"}
        onChange={() => { } }
        value={"2024-11-12"} 
        title={"외출 일시"}/>
    );
  });
});
