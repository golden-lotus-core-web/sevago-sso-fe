import { Stack } from "@mui/system";
import { type ReactNode } from "react";
import { STYLE } from "../../../../common/constant";
import {
  StackRowAlignCenter,
  StackRowJustBetween,
} from "../../../../components/styles/stack.style";
import { LogoComponent } from "../../../../components/logo/logo.component";
import { BellComponent } from "../../../../components/bell/bell.component";
import { AvatarUserComponent } from "../../../../components/avatar-user/avatar-user.component";

export const MonitorPart: React.FC<any> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflowY: "auto",
        backgroundImage: "url('/images/image-dashboard.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack p={{ padding: STYLE.PADDING_GAP_LAYOUT }}>
        <StackRowJustBetween>
          <StackRowAlignCenter>
            <LogoComponent
              url={"/images/logo/logo-sub-3.svg"}
              fillColor="white"
            />
          </StackRowAlignCenter>
          <StackRowAlignCenter>
            <BellComponent />
            <AvatarUserComponent />
          </StackRowAlignCenter>
        </StackRowJustBetween>

        {children}
      </Stack>
    </Stack>
  );
};

export default MonitorPart;
