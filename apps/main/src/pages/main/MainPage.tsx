import { API_URL } from 'config';

import { ArrowIcon, Typography } from '@example/common';

import { UserInfo } from './UserInfo';

const MainPage = () => {
  return (
    <>
      <UserInfo title="title" userName="ivan" userEmail="ivan@ivan.com" />
      <Typography>{API_URL}</Typography>
      <ArrowIcon />
    </>
  );
};

export default MainPage;
