import { elementCreator, createListContent } from '../../view-makers/elementCreator';
import { secondRegisterForm } from '../../../models/appDataModel';

const cousine = document.getElementById('cousine-field');
cousine.append(...createListContent(secondRegisterForm.cuisineField));

const languages = document.getElementById('language-field');
languages.prepend(...createListContent(secondRegisterForm.languagesFiled[0]));

const languageInputs = document.getElementById('language-field-inputs');
languageInputs.prepend(...createListContent(secondRegisterForm.languagesFiled[1]));

const awards = document.getElementById('awards-field');
awards.append(...createListContent(secondRegisterForm.awardsField));

const aboutUser = document.getElementById('about-user-field');
aboutUser.append(...createListContent(secondRegisterForm.aboutUserField));
