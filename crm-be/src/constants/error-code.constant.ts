export enum ErrorCode {
  // Common Validation
  V000 = 'common.validation.error',

  // Validation
  V001 = 'user.validation.is_empty',
  V002 = 'user.validation.is_invalid',
  //
  V003 = 'user.validation.password_length_invalid',
  V004 = 'user.validation.password_contain_letter_upper_case',
  V005 = 'user.validation.password_contain_letter_lower_case',
  V006 = 'user.validation.password_contain_number',
  V007 = 'user.validation.password_contain_character',

  // Phone Errors
  V008 = 'user.validation.phone_required',
  V009 = 'user.validation.vn_phone',

  // Email Errors
  V010 = 'user.validation.email_required',
  V011 = 'user.validation.email_invalid_domain',

  // Full Name Errors
  V012 = 'user.validation.full_name_required',
  V013 = 'user.validation.full_name_blacklist',

  // Username Errors
  V014 = 'user.validation.username_blacklist',

  // Error
  E001 = 'user.error.username_or_email_exists',
  E002 = 'user.error.not_found',
  E003 = 'user.error.email_exists',
  E004 = 'user.error.username_exists',
  E005 = 'user.error.token_expires',
}
