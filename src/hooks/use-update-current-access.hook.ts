import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findCurrentAccessByPath } from "../common/utils/find-current-access.helper";
import { ACTION_ACCOUNT } from "../redux";
import { useAppDispatch } from "../redux/store.redux";

export const useUpdateCurrentAccess = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const updateAccess = useCallback(
    async (pathname: string) => {
      const currentAccess = findCurrentAccessByPath(pathname);
      if (currentAccess) {
        await dispatch(
          ACTION_ACCOUNT.updateCurrentAccess(currentAccess)
        ).unwrap();
      }
    },
    [dispatch]
  );

  useEffect(() => {
    updateAccess(location.pathname);
  }, [location.pathname, updateAccess]);

  return updateAccess;
};
