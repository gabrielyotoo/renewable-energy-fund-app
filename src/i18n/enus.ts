/* eslint-disable max-len */
export default {
  formatter: {
    currency: '{{value, currency(USD)}}',
    percentage: '{{value, number(minimumFractionDigits: 2)}}%',
  },
  components: {
    homeHeader: {
      account: 'Account: {{value, currency(USD)}}',
      portfolio: 'Portfolio',
      earn: 'Earn rewards',
    },
    tabBar: {
      home: 'Home',
      trade: 'Trade',
      portfolio: 'Portfolio',
    },
  },
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
          'I am over 18 years of age and I have read and agree to the <2>Terms of Service</2> and <5>Privacy Policy</5>.',
        error:
          'You must agree with terms of use and privacy policy to register',
      },
      register: 'Create account',
      login: 'Already have an account? <2>Log in here</2>',
      success: 'Account created successfully!',
    },
    home: {
      funds: 'Funds',
      banner: {
        title: 'Learn more about carbon credits',
        subtitle: 'Check out our top tips!',
      },
    },
    fundDetails: {
      info: 'Info & Stats',
      AUM: 'AUM',
      issueDate: 'Issue Date',
      vintageRange: 'Vintage Range',
      TER: 'TER',
      priceAtClose: 'Price at Close',
      priceAtOpen: 'Price at Open',
      fundBreakdown: {
        title: 'Fund Breakdown',
        tabs: {
          highlighted: 'Highlighted',
          value: 'Value',
          vintage: 'Vintage',
          registry: 'Registry',
        },
      },
      portfolio: {
        title: 'Your Portfolio',
        credits: '{{count}} credit',
        credits_plural: '{{count}} credits',
        lastPurchase: 'Last purchase {{count}} day ago',
        lastPurchase_plural: 'Last purchase {{count}} days ago',
        sell: 'Sell',
        retireCredits: 'Retire credits',
        previous: "You've previously retired {{count}} credit of this asset",
        previous_plural:
          "You've previously retired {{count}} credits of this asset",
        disclaimer:
          'Please note that prices are for reference only and may vary at the time of executing a buy or sell order.\n\nThe information provided is not investment advice, and should not be used as a recommendation to buy or sell your assets.',
        buy: 'Buy',
      },
    },
    success: {
      continue: 'Continue',
    },
  },
};
