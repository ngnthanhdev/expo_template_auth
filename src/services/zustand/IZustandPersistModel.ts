import { ModeTheme } from "@/src/utils/enum";

export interface ISessionStorage {
  token?: string;
  refreshToken?: string;
  expiresAt?: string
}

export interface ZustandPersistModel {
  Token?: ISessionStorage,
  ThemeApp?: ModeTheme, 
}