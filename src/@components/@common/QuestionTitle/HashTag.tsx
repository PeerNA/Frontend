import { HashTagInfo } from '../../../type/problem';
import styled from 'styled-components';

const HashTag = (props: HashTagInfo) => {
  const { keywordList } = props;

  return (
    <St.HashTagWrapper>
      {keywordList.map((hashTag) => (
        <li key={hashTag}>{hashTag}</li>
      ))}
    </St.HashTagWrapper>
  );
};

export default HashTag;

const St = {
  HashTagWrapper: styled.ul`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    color: ${({ theme }) => theme.colors.Peer_Color_White_2};

    & > li {
      padding: 0.5rem 2rem;

      ${({ theme }) => theme.fonts.Peer_Noto_M_Content_2};
      background-color: ${({ theme }) => theme.colors.Peer_Color_Purple};

      border-radius: 1rem;

      text-align: center;
    }
    & > li::before {
      content: '# ';
    }
  `,
};
