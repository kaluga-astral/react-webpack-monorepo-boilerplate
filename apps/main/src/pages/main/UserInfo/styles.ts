import { styled } from '@example/common';
import { Grid, Typography } from '@example/common';

export const UserInfoWrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const UserInfoTitle = styled(Typography)`
  text-align: center;
`;
