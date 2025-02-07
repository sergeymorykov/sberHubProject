import { GetInterestsResponse } from '../../../../service/interests/types';

export interface InterestsProps {
  id: string;
  name: string;
  defaultValues: GetInterestsResponse;
}
