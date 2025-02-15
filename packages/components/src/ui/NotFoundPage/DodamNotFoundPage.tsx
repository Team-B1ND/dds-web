import React from "react";
import styled from "styled-components";
import { StatusCode, DodamSadEmoji } from "@dds-web/assets";
import { DodamTypography } from "@dds-web/styles";
import { DodamFilledButton } from "../Button";

export const DodamNotFoundPage = () => {

  return (
    <StyledNotFoundPage>
      <StyledInfoWrap>
        <StatusCode color="primaryNormal" />
        <StyledTitleWrap>
          <StyledTitle>Page Not Found</StyledTitle>
          <DodamSadEmoji color="primaryNormal" />
        </StyledTitleWrap>
        <StyledContentWrap>
          <StyledContent>
            입력하신 페이지의 주소를 찾을 수 없습니다.
          </StyledContent>
          <StyledContent>
            <span>도담도담</span>으로 되돌아가시려면 아래 버튼을 눌러주세요!
          </StyledContent>
        </StyledContentWrap>
      </StyledInfoWrap>
      <DodamFilledButton
        size="Medium"
        padding="12px 30px"
        backgroundColorType="Primary"
        typography={['Headline','Bold']}
        customStyle={ {color:"#fff"}}
        onClick={() => (window.location.href = "https://dodam.b1nd.com/")}>
        도담도담 홈으로
      </DodamFilledButton>
    </StyledNotFoundPage>
  );
};

const StyledNotFoundPage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.backgroundNeutral};
`;

const StyledInfoWrap = styled.div`
  width: auto;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 125px;
`;

const StyledTitleWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Title1.Bold}

  margin-right: 16px;
`;

const StyledContentWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;

const StyledContent = styled.p`
  color: ${({ theme }) => theme.labelNeutral};
  ${DodamTypography.Heading2.Medium}

  span {
    color: ${({ theme }) => theme.primaryNormal};
    ${DodamTypography.Heading2.Bold}
  }
`;
