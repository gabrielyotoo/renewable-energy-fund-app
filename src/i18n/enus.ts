/* eslint-disable max-len */
export default {
  screens: {
    login: {
      title: 'Login',
      email: {
        label: 'E-mail',
        placeholder: 'example@company.com',
        error: 'Please, type a valid e-mail',
      },
      password: {
        label: 'Password',
        placeholder: '••••••••',
      },
      login: 'Login',
      noAccount: "Don't have an account? <2>Sign up</2> here",
    },
    register: {
      title: 'Create your account',
      firstName: {
        label: 'First name',
        placeholder: 'John',
        error: 'Please, type a valid first name',
      },
      lastName: {
        label: 'Last name',
        placeholder: 'Doe',
        error: 'Please, type a valid last name',
      },
      email: {
        label: 'E-mail',
        placeholder: 'example@company.com',
        error: 'Please, type a valid e-mail',
      },
      password: {
        label: 'Password',
        placeholder: 'Minimum 8 characters',
        error: {
          required: 'Please, type a valid password',
          minLength: 'Your password must contain at least 8 characters',
        },
      },
      termsAgree: {
        label:
          'I am over 18 years of age and I have read and agree to the <2>Terms of Service</2> and <4>Privacy Policy</4>.',
        error:
          'You must agree with terms of use and privacy policy to register',
      },
      register: 'Create account',
      login: 'Already have an account? <2>Log in here</2>',
    },
  },
};
