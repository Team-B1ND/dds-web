import React from "react";
import styled, { useTheme } from "styled-components";
import { StatusCode, DodamSadEmoji, CheckmarkCircleFilled } from "@dds-web/assets";
import { DodamShape, DodamTypography } from "@dds-web/styles";

export const DodamNotFoundPage = () => {
  const theme = useTheme();

  return (
    <StyledNotFoundPage>
      <CheckmarkCircleFilled />
      <StyledInfoWrap>
        <StatusCode color={theme.primaryNormal} />
        <StyledTitleWrap>
          <StyledTitle>Page Not Found</StyledTitle>
          <DodamSadEmoji color={theme.primaryNormal} />
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
      <StyledButton
        onClick={() => window.location.href = "https://dodam.b1nd.com/"}>
        도담도담 홈으로
      </StyledButton>
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

  background-color: ${({ theme }) => theme.backgroundNetural};
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
  color: ${({ theme }) => theme.labelNetural};
  ${DodamTypography.Heading2.Medium}

  span {
    color: ${({ theme }) => theme.primaryNormal};
    ${DodamTypography.Heading2.Bold}
  }
`;

const StyledButton = styled.button`
  width: auto;
  height: auto;

  color: ${({ theme }) => theme.staticWthie};
  ${DodamTypography.Headline.Bold}

  border: none;
  ${DodamShape.Medium};
  background-color: ${({ theme }) => theme.primaryNormal};
  
  padding: 12px 30px;
  cursor: pointer;

  transition: all 0.15s ease-in-out;
  &:active {
    transform: scale(0.97);
  }
`;
