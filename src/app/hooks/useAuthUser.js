import { useMutation, useQuery } from "@tanstack/react-query";
import { loginUser, registerUser } from "../api/auth.api";


export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {},
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data, variables, context) => {},
  });
};
