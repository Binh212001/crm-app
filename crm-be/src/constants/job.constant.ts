export enum QueueName {
  EMAIL = 'email',
  NOTIFICATION = 'notification',
  PAYMENT = 'payment',
  ENROLL = 'enroll',
  AFFILIATE = 'affiliate',
  QUIZ = 'quiz',
}

export enum QueuePrefix {
  AUTH = 'auth',
  ENROLL_COURSE = 'enroll-course',
  PAYMENT = 'payment',
  QUIZ = 'quiz',
  EMAIL = 'email',
}

export enum JobName {
  EMAIL_ACCOUNT_CREATED = 'ACCOUNT_CREATED',
  EMAIL_WELCOME = 'WELCOME',
  EMAIL_ACTIVE_ACCOUNT = 'ACTIVE_ACCOUNT',
  EMAIL_VERIFY_ACCOUNT = 'VERIFY_ACCOUNT',
  EMAIL_FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  EMAIL_COURSE_EXPIRE = 'COURSE_EXPIRE',
  // Order Notifications
  EMAIL_BANK_TRANSFER_ORDER = 'BANK_TRANSFER_ORDER',
  EMAIL_BANK_TRANSFER_ORDER_GET_CODE = 'BANK_TRANSFER_ORDER_GET_CODE',
  EMAIL_BANK_TRANSFER_ORDER_NONE_USER = 'BANK_TRANSFER_ORDER_NONE_USER',

  // Payment Success Notifications
  EMAIL_ONLINE_PAYMENT_SUCCESS = 'ONLINE_PAYMENT_SUCCESS',
  EMAIL_BANK_TRANSFER_SUCCESS = 'BANK_TRANSFER_SUCCESS',
  EMAIL_BANK_TRANSFER_SUCCESS_GET_CODE = 'BANK_TRANSFER_SUCCESS_GET_CODE',

  // Affiliate Notifications
  EMAIL_REGISTER_AFFILIATE = 'REGISTER_AFFILIATE',
  USER_REGISTERED_NOTIFICATION = 'user-registered-notification',
  USER_LOGIN_NOTIFICATION = 'user-login-notification',
  USER_ENROLL_COURSE_EMAIL = 'user-enroll-course',
  USER_ENROLL_COURSE_NOTIFICATION = 'user-enroll-course-notification',
  PAYMENT_SUCCESS = 'paginate-success',
  LESSON_DEADLINE_NOTIFICATION = 'lesson-deadline-notification',
  LESSON_VIDEO_PERIOD_NOTIFICATION = 'lesson-video-period-notification',
  USER_UPLOAD_IMAGE_ORDER_NOTIFICATION = 'user-upload-image-order-notification',
  NOTIFICATION_CUSTOM_GENERAL = 'notification-custom-general',
  NOTIFICATION_CUSTOM_ONLINE_CLASS_TIME_ANNOUNCEMENT = 'notification-custom-online-class-time-announcement',
  NOTIFICATION_CUSTOM_LESSON_STATUS_UPDATE_NOTIFICATION = 'notification-custom-lesson-status-update-notification',
  NOTIFICATION_CUSTOM_PROMOTION_AND_DISCOUNT_ANNOUNCEMENT = 'notification-custom-promotion-and-discount-announcement',
  //
  NOTIFICATION_COURSE_EXPIRE = 'notification-course-expire',
}
