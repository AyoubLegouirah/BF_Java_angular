import {meetingTypeForm} from '../enum/meetingTypeForm';

export interface Contact{
  firstName: string;
  lastName: string;
  email: string;
  meetingType: meetingTypeForm;
  description: string;
  availability: Date[];
  atHome: boolean;
}
