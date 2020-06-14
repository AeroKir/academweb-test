export const firstRegisterForm = {
  userNameField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'user-name',
      elementInnerText: 'Ім\'я',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'user-name',
      type: 'text',
      placeholder: 'Константин',
      value: '',
      required: true,
    },
  ],

  userSurnameField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'user-surname',
      elementInnerText: 'Прізвище',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'user-surname',
      type: 'text',
      placeholder: 'Константинопольський',
      value: '',
      required: true,
    },
  ],

  userEmailField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'user-email',
      elementInnerText: 'Електронна пошта',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'user-email',
      type: 'email',
      placeholder: 'example@gmail.com',
      value: '',
      required: true,
    },
  ],

  userPhoneField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'user-phone',
      elementInnerText: 'Номер телефону',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'user-phone',
      type: 'tel',
      placeholder: '+38 ( _ _ _ ) _ _ _ - _ _ - _ _',
      pattern: '+38 ( _ _ _ ) _ _ _ - _ _ - _ _',
      value: '',
      required: true,
    },
  ],

  userPasswordField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'user-password',
      elementInnerText: 'Вигадайте пароль',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'user-password',
      type: 'password',
      placeholder: '',
      value: '',
      required: true,
    },
    {
      tagName: 'button',
      className: 'button button__inner-input',
      id: 'show-password-button',
      type: 'button',
      value: '',
      elementInnerText: null,
    },
  ],

  userPasswordConfirmField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'confirm-user-password',
      elementInnerText: 'Повторіть пароль',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'confirm-user-password',
      type: 'password',
      placeholder: '',
      value: '',
      required: true,
    },
  ],
};

export const secondRegisterForm = {
  cuisineField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'dishes',
      elementInnerText: 'Які кухні готую:',
    },
    {
      tagName: 'p',
      className: 'paragraph form__explanation',
      elementInnerText: 'Почніть заповнювати перші літери назви кухні, яку Ви можете готувати.',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'dishes',
      type: 'text',
      placeholder: 'Почніть вводити назву',
      value: '',
      required: true,
    },
  ],

  languagesFiled: [
    [
      {
        tagName: 'label',
        className: 'form__label',
        labelFor: 'language',
        elementInnerText: 'Мови',
      },
      {
        tagName: 'p',
        className: 'paragraph form__explanation',
        elementInnerText: 'Додайте мови, якими Ви володієте.',
      },
    ],

    [
      {
        tagName: 'input',
        className: 'form__input form__input_half_left',
        id: 'language',
        type: 'text',
        placeholder: 'Мова',
        value: '',
        required: false,
      },
    ],
  ],

  awardsField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'awards',
      elementInnerText: 'Нагороди',
    },
    {
      tagName: 'p',
      className: 'paragraph form__explanation',
      elementInnerText: 'Перелічіть свої нагороди через кому у полі нижче.',
    },
    {
      tagName: 'input',
      className: 'form__input',
      id: 'awards',
      type: 'text',
      placeholder: '...Chef Award 2017, Global Chef Award 2018',
      value: '',
      required: false,
    },
  ],

  aboutUserField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'about-user',
      elementInnerText: 'Про себе',
    },
    {
      tagName: 'textarea',
      className: 'form__textarea',
      id: 'about-user',
      type: 'text',
      placeholder: 'Напишіть декілька речень про себе...',
      name: 'textarea',
      value: '',
      required: false,
      elementInnerText: '',
    },
  ],
};

export const thirdRegisterForm = {
  educationField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'education',
      elementInnerText: 'Освіта',
    },
    {
      tagName: 'input',
      className: 'form__input form__input_margin_bottom',
      id: 'education',
      type: 'text',
      placeholder: 'Місце навчання',
      value: '',
      required: true,
    },
    {
      tagName: 'input',
      className: 'form__input form__input_margin_bottom',
      id: 'speciality',
      type: 'text',
      placeholder: 'Спеціальність',
      value: '',
      required: true,
    },
    {
      tagName: 'p',
      className: 'paragraph form__explanation form__explanation_padding_top',
      elementInnerText: 'Виберіть дату початку та закінчення навчання в цьому закладі.',
    },
    {
      tagName: 'input',
      className: 'form__input form__input_type_date form__input_margin_bottom form__input_margin_right',
      id: 'education-date-begin',
      type: 'date',
      value: '',
      required: true,
    },
    {
      tagName: 'input',
      className: 'form__input form__input_type_date form__input_margin_bottom',
      id: 'education-date-end',
      type: 'date',
      value: '',
      required: true,
    },
    {
      tagName: 'textarea',
      className: 'form__textarea form__input_margin_bottom',
      id: 'about-user-education',
      placeholder: 'Декілька слів про навчання...',
      name: 'about-user-education',
      value: '',
      required: false,
      elementInnerText: '',
    },
  ],

  workingExperienceField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'place-of-work',
      elementInnerText: 'Досвід роботи',
    },
    {
      tagName: 'input',
      className: 'form__input form__input_margin_bottom',
      id: 'place-of-work',
      type: 'text',
      placeholder: 'Місце роботи',
      value: '',
      required: true,
    },
    {
      tagName: 'input',
      className: 'form__input form__input_margin_bottom',
      id: 'position',
      type: 'text',
      placeholder: 'Посада',
      value: '',
      required: true,
    },
    {
      tagName: 'p',
      className: 'paragraph form__explanation form__explanation_padding_top',
      elementInnerText: 'Виберіть дату початку та закінчення роботи в цій організації.',
    },
    {
      tagName: 'input',
      className: 'form__input form__input_type_date form__input_margin_bottom form__input_margin_right',
      id: 'work-date-begin',
      type: 'date',
      value: '',
      required: true,
    },
    {
      tagName: 'input',
      className: 'form__input form__input_type_date form__input_margin_bottom',
      id: 'work-date-end',
      type: 'date',
      value: '',
      required: true,
    },
    {
      tagName: 'textarea',
      className: 'form__textarea form__input_margin_bottom',
      id: 'working-experience',
      placeholder: 'Декілька слів про досвід роботи на цій посаді...',
      name: 'working-experience',
      value: '',
      required: false,
      elementInnerText: '',
    },
  ],
};
