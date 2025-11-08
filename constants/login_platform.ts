const LOGIN_PLATFORM = {
  GITHUB: "github",
  GOOGLE: "google",
} as const;
type KeyOfLoginPlatform = keyof typeof LOGIN_PLATFORM;
export type LoginPlatformType = (typeof LOGIN_PLATFORM)[KeyOfLoginPlatform];

export default LOGIN_PLATFORM;
