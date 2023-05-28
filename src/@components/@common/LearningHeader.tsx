import styled from 'styled-components';
import studying from '../../assets/image/studying.png';

interface LearningHeaderProps {
  title: string;
  pageType: string;
}
const LearningHeader = (props: LearningHeaderProps) => {
  const { title, pageType } = props;
  return (
    <St.HeaderWrapper>
      <img src={studying} />
      {pageType === 'main' ? <h2> {title}</h2> : <h1>{title}</h1>}
    </St.HeaderWrapper>
  );
};

export default LearningHeader;

const St = {
  HeaderWrapper: styled.header`
    display: flex;

    justify-content: flex-start;
    align-items: center;

    gap: 1rem;

    width: 100%;
    height: fit-content;
    padding: 1rem 0;

    border-bottom: 0.4rem solid ${({ theme }) => theme.colors.Peer_Color_Blue};
    & > h1 {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_1}
    }
    & > h2 {
      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2}
    }
  `,
};
