import React from 'react';
import { HashTagList } from '../../../../type/problem';
import { St } from './style';

const HashTag = (props: HashTagList) => {
  const { hashTagList } = props;

  return (
    <St.HashTagWrapper>
      {hashTagList.map((hashTag) => (
        <li key={hashTag}>{hashTag}</li>
      ))}
    </St.HashTagWrapper>
  );
};

export default HashTag;
