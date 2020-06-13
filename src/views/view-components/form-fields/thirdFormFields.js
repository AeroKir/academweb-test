import { elementCreator, createListContent } from '../../view-makers/elementCreator';
import { thirdRegisterForm } from '../../../models/appDataModel';

const education = document.getElementById('education-field');
education.prepend(...createListContent(thirdRegisterForm.educationField));

const workingExperience = document.getElementById('working-experience-field');
workingExperience.prepend(...createListContent(thirdRegisterForm.workingExperienceField));
