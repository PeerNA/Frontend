import Pagination from 'react-js-pagination';
import styled from 'styled-components';

interface PagingProps {
  totalItemsCount: number;
  activePage: number;
  handleClickPage: (newSize: number) => void;
}

const Paging = (props: PagingProps) => {
  const { totalItemsCount, handleClickPage, activePage } = props;

  const handlePagination = (pageNumber: number) => {
    handleClickPage(pageNumber);
  };

  console.log(totalItemsCount);
  return (
    <St.PaginateWrapper>
      <Pagination
        totalItemsCount={totalItemsCount}
        onChange={handlePagination}
        activePage={activePage}
        pageRangeDisplayed={5}
        itemsCountPerPage={5}
        activeLinkClass="active"
      />
    </St.PaginateWrapper>
  );
};

export default Paging;

const St = {
  PaginateWrapper: styled.div`
    position: fixed;
    bottom: 10%;
    width: 100%;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    a {
      ${({ theme }) => theme.fonts.Peer_Noto_M_Content_2};
      color: ${({ theme }) => theme.colors.Peer_Color_Black};

      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.colors.Peer_Color_Blue};
      }
      &.active {
        color: ${({ theme }) => theme.colors.Peer_Color_Blue};
      }
    }
    li {
      cursor: pointer;
      text-decoration: none;
    }
  `,
};
