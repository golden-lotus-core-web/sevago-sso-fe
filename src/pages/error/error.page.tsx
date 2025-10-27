import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutType } from "../../apis/auth/auth.enum";
import { ButtonElement } from "../../components/elements/button/button.element";
import { StackRowAlignCenter } from "../../components/styles/stack.style";
import { ACTION_ACCOUNT } from "../../redux";
import { useAppDispatch } from "../../redux/store.redux";
import { useSelector } from "react-redux";
import { type GlobalReduxState } from "../../redux/store.interface";
import { PAGE } from "../../router/route.constant";

export interface ErrorPageProps {}

export const ErrorPage: React.FC<ErrorPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const account = useSelector((state: GlobalReduxState) => state.account);

  const [loading, setLoading] = React.useState(false);

  return (
    <Fragment>
      <StackRowAlignCenter>
        <Typography color="primary" variant="h1" fontSize={90}>
          5
        </Typography>
        <Stack
          component={"img"}
          sx={{ height: "90px" }}
          alt="404 img number 0"
          src="/images/diamond.png"
          className="image-404"
          loading="lazy"
        />
        <Stack
          component={"img"}
          sx={{ height: "90px" }}
          alt="404 img number 0"
          src="/images/diamond.png"
          className="image-404"
          loading="lazy"
        />
      </StackRowAlignCenter>

      <Typography sx={{ width: 450, textAlign: "center", lineHeight: 2 }}>
        TÀI KHOẢN CỦA BẠN KHÔNG ĐỦ QUYỀN TRUY CẬP HOẶC HỆ THỐNG ĐÃ GẶP SỰ CỐ!
      </Typography>
      <ButtonElement
        content="Đăng nhập lại"
        fullWidth={false}
        loading={loading}
        onClick={async () => {
          setLoading(true);
          try {
            await Promise.all([
              dispatch(
                ACTION_ACCOUNT.logout({
                  type: LogoutType.THIS_DEVICE,
                  refreshToken: account.refreshToken,
                })
              ).unwrap(),
              dispatch(
                ACTION_ACCOUNT.unsubscribeTopic({ fcmToken: account.fcmToken })
              ).unwrap(),
            ]);

            navigate(PAGE.AUTH.path);
          } finally {
            setLoading(false);
          }
        }}
      />
    </Fragment>
  );
};
