import { IcArrowDropDown } from '../../../../assets/icon';
import { SUBJECT_CATEGORY_LIST } from '../../../../constants/mainPageInfo';
import { St } from './style';

interface SubjectSelectProps {
  priority: number;
}
const SubjectSelect = (props: SubjectSelectProps) => {
  const { priority } = props;
  return (
    <St.SubjectArticleWrapper>
      <header>
        <h3>{priority}순위</h3>
      </header>
      <St.SubjectSelect>
        {SUBJECT_CATEGORY_LIST.map((category) => (
          <St.SubjectOption key={category} value={category}>
            {category}
          </St.SubjectOption>
        ))}
      </St.SubjectSelect>
    </St.SubjectArticleWrapper>
  );
};

export default SubjectSelect;
