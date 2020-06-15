import { elementCreator, createListContent } from '../../view-makers/elementCreator';
import { firstRegisterForm } from '../../../models/appDataModel';

const userName = document.getElementById('user-name-field');
userName.append(...createListContent(firstRegisterForm.userNameField));

const userSurname = document.getElementById('user-surname-field');
userSurname.append(...createListContent(firstRegisterForm.userSurnameField));

const userEmail = document.getElementById('user-email-field');
userEmail.append(...createListContent(firstRegisterForm.userEmailField));

const userPhone = document.getElementById('user-phone-field');
userPhone.append(...createListContent(firstRegisterForm.userPhoneField));

const userPassword = document.getElementById('user-password-field');
userPassword.append(...createListContent(firstRegisterForm.userPasswordField));

const userPasswordConfirm = document.getElementById('confirm-user-password-field');
userPasswordConfirm.append(...createListContent(firstRegisterForm.userPasswordConfirmField));
