import { SContentWrapper, SContentTitle } from "./StyledComponents";

import CardGroup from "./CardGroup";

function Content({ children, type, title }) {
  return (
    <SContentWrapper>
      <SContentTitle>
        <span>{title}</span>
        {/* 더보기 버튼 - 버튼 컴포넌트 생성 필요 */}
        <p>더보기</p>
      </SContentTitle>
      {type === "card" && <CardGroup />}
      {children}
    </SContentWrapper>
  );
}

export default Content;
