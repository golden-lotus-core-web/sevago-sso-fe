import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonElement } from '../../components/elements/button/button.element';
import { StackRowAlignCenter } from '../../components/styles/stack.style';
import { PAGE } from '../../router/route.constant';

export interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <StackRowAlignCenter>
        <Typography color="primary" variant="h1" fontSize={90}>
          4
        </Typography>
        <Stack
          component={'img'}
          sx={{ height: '90px' }}
          alt="404 img number 0"
          src="/images/diamond.png"
          className="image-404"
          loading="lazy"
        />
        <Typography color="primary" variant="h1" fontSize={90}>
          4
        </Typography>
      </StackRowAlignCenter>

      <Typography sx={{ width: 450, textAlign: 'center', lineHeight: 2 }}>
        XIN LỖI, TRANG BẠN TÌM KIẾM KHÔNG TỒN TẠI!
      </Typography>
      <ButtonElement content="Quay lại trang chủ" fullWidth={false} onClick={() => navigate(PAGE.AUTH.path)} />
    </Fragment>
  );
};
