// shimmer는 로딩 중에 콘텐츠가 나타날 예정임을 강조하기 위한 시각적 효과이다.
import { css, keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 0 100%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const DodamShimmer = css`
  background: linear-gradient(
    125deg,
    #f4f4f4 34.58%,
    #fff 47.36%,
    #e7e7e7 61.48%,
    #e7e7e7 61.48%
  );
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1s linear infinite;
`;
