export const firstRegisterForm = {
  userNameField: [
    {
      tagName: 'label',
      className: 'form__label',
      labelFor: 'user-name',
      labelTitle: 'Ім\'я',
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
      labelTitle: 'Прізвище',
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
};

export const secondRegisterForm = {

};
