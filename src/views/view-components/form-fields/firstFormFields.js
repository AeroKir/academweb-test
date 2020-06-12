import { elementCreator, createListContent } from '../../view-makers/elementCreator';
import { firstRegisterForm } from '../../../models/appDataModel';

const body = document.getElementById('education-field');

const usernameField = body.append(...createListContent(firstRegisterForm.userNameField));

// export default usernameField;
