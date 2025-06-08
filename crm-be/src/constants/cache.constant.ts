export enum CacheKey {
  SESSION_BLACKLIST = 'auth:session-blacklist:%s', // %s: sessionId
  EMAIL_VERIFICATION = 'auth:token:%s:email-verification', // %s: userId
  PASSWORD_RESET = 'auth:token:%s:password', // %s: userId
  SETTING = 'setting:key:%s',
  LIMITER_RESET_PASSWORD = 'auth:reset_password:email:%s:sent', //token
  LIMITER_RESEND_VERIFY = 'auth:resend:email:%s:sent', //token
  TOKEN_RANDOM = 'auth:token:%s:random', //token
  FIND_USER_BY_ID = 'user:find:%s:id', //user id
  PING_USER_ONLINE = 'user:online:%s', //user id
  NOTIFICATION_CUSTOM_CHECKED = 'notification:checked:%s', //noti name,
  PING_USER_LEARNING = 'user:learning:%s', //noti name,
}
