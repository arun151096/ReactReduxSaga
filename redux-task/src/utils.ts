
export const FIELD_REQUIRED = 'This Field is Required';

export const EMAIL_PATTERN_INCORRECT = 'Email Pattern Incorrect';

export interface Form<T> {
    submitted: boolean;
    value: T
};