import { SignIn, } from "./signin";
import { SignUp } from "./signup";

export type OperationType = keyof typeof Operations;

export const Operations = {
  SignIn,
  SignUp
}

