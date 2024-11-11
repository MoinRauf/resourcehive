import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export default function useBindedReduxActions(reduxActions) {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(reduxActions, dispatch),
    [dispatch]
  );
  return actions;
}
