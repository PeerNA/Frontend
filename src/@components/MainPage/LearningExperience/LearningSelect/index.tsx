import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { CAREER_TYPE_LIST, SELET_TITLE_LIST, SUBJECT_CATEGORY_LIST } from '../../../../constants/mainPageInfo';
import { userInfoState } from '../../../../recoil/atom/userInfo';
import { St } from './style';

interface LearningSelectProps {
  isSubject: boolean;
  title: string;
}
const LearningSelect = (props: LearningSelectProps) => {
  const { isSubject, title } = props;

  const [userInfoAtom, setUserInfoAtom] = useRecoilState(userInfoState);
  // const r = useResetRecoilState(userInfoState);
  // r();
  const OPTION_LIST = isSubject ? SUBJECT_CATEGORY_LIST : CAREER_TYPE_LIST;

  const handleChangeOptionValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (title) {
      case SELET_TITLE_LIST[0]:
        setUserInfoAtom({ ...userInfoAtom, career: e.target.value });
        break;
      case SELET_TITLE_LIST[1]:
        setUserInfoAtom({ ...userInfoAtom, priorityList: { ...userInfoAtom.priorityList, priority1: e.target.value } });
        break;
      case SELET_TITLE_LIST[2]:
        setUserInfoAtom({ ...userInfoAtom, priorityList: { ...userInfoAtom.priorityList, priority2: e.target.value } });
        break;
      case SELET_TITLE_LIST[3]:
        setUserInfoAtom({ ...userInfoAtom, priorityList: { ...userInfoAtom.priorityList, priority3: e.target.value } });
        break;
    }
  };

  return (
    <St.SubjectArticleWrapper>
      <header>
        <h3>{title}</h3>
      </header>
      <St.SubjectSelect onChange={handleChangeOptionValue}>
        {OPTION_LIST.map((option) => (
          <St.SubjectOption key={option} value={option}>
            {option}
          </St.SubjectOption>
        ))}
      </St.SubjectSelect>
    </St.SubjectArticleWrapper>
  );
};

export default LearningSelect;
