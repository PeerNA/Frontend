import useModal from '../hook/useModal';
import { St } from './style';

interface MyProfileProps {
  userName: string;
}
const MyProfile = (props: MyProfileProps) => {
  const { userName } = props;

  const { isModalOpen, toggleModal } = useModal();

  return (
    <St.MyProfileSection onClick={toggleModal}>
      <img src="https://avatars.githubusercontent.com/u/79238676?v=4" alt="profile-img" />
      <St.ProfileName>{userName}님</St.ProfileName>
      {isModalOpen && (
        <St.MyProfileArticle>
          <St.ProfileTitle>
            <h1>내 프로필</h1>
          </St.ProfileTitle>
          <img src="https://avatars.githubusercontent.com/u/79238676?v=4" alt="profile-img" />
          <p>{userName}</p>
          <St.ProfileModalList>
            <li>로그아웃</li>
            <li>회원탈퇴</li>
          </St.ProfileModalList>
        </St.MyProfileArticle>
      )}
    </St.MyProfileSection>
  );
};

export default MyProfile;
