import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteUserInfo, postLogout } from '../../lib/api/auth';
import useModal from '../../lib/hooks/useModal';

interface MyProfileProps {
  userName: string;
  imageUrl: string;
}
const MyProfile = (props: MyProfileProps) => {
  const { userName, imageUrl } = props;

  const navigate = useNavigate();
  const { isProfileModal, toggleModal } = useModal();

  const handleLogout = async () => {
    const data = await postLogout();
    if (data) navigate('/');
  };

  const handleDeleteUser = async () => {
    const data = await deleteUserInfo();
    if (data) navigate('/');
  };
  return (
    <St.MyProfileSection onClick={() => toggleModal(true)}>
      <img src={imageUrl} alt="profile-img" />
      <St.ProfileName>{userName}님</St.ProfileName>
      {isProfileModal && (
        <St.MyProfileArticle>
          <St.ProfileTitle>
            <h1>내 프로필</h1>
          </St.ProfileTitle>
          <img src={imageUrl} alt="profile-img" />
          <p>{userName}</p>
          <St.ProfileModalList>
            <li onClick={handleLogout}>로그아웃</li>
            <li onClick={handleDeleteUser}>회원탈퇴</li>
          </St.ProfileModalList>
        </St.MyProfileArticle>
      )}
    </St.MyProfileSection>
  );
};

export default MyProfile;
const St = {
  MyProfileSection: styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    position: relative;

    padding: 1rem;

    border-radius: 2rem;

    & > img {
      width: 5.9rem;
      height: 5.9rem;

      border-radius: 3rem;
    }
    :hover {
      background-color: ${({ theme }) => theme.colors.Peer_Color_Sky_2};
    }
  `,
  ProfileName: styled.p`
    ${({ theme }) => theme.fonts.Peer_Noto_B_Content_1};
    cursor: pointer;
  `,
  MyProfileArticle: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 10rem;
    right: ${0.003 * window.screen.width}rem;

    width: ${0.03 * window.screen.width}rem;
    padding: 0 2.2rem;

    background-color: ${({ theme }) => theme.colors.Peer_Color_White_2};
    border: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};
    border-radius: 3rem;

    & > img {
      width: 11rem;
      margin: 1.7rem 0;

      border-radius: 30rem;
    }

    & > p {
      margin-bottom: 1rem;

      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2};
    }
  `,
  ProfileTitle: styled.header`
    display: flex;
    justify-content: center;

    width: 100%;

    & > h1 {
      margin: 1.7rem 0;

      ${({ theme }) => theme.fonts.Peer_Noto_B_Title_2};
    }
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};
  `,
  ProfileModalList: styled.ul`
    width: 100%;

    list-style: none;
    & > li {
      display: flex;
      justify-content: center;

      width: 100%;
      margin: 3rem 0rem;

      ${({ theme }) => theme.fonts.Peer_Noto_M_SubTitle_1};
      color: ${({ theme }) => theme.colors.Peer_Color_Gray};
      &:hover {
        cursor: pointer;
      }
    }

    & > li:first-child {
      padding-bottom: 3rem;
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.Peer_Color_Sky_1};
    }
  `,
};
