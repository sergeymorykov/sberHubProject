import { jest } from '@jest/globals';
import { interestsService } from '../../../../service/interests';
import { GetInterestsResponse } from '../../../../service/interests/types';

export const spyedGetInterests = jest.spyOn(interestsService, 'getInterests');

export const mockGetInterests = (data?: GetInterestsResponse) => {
  spyedGetInterests.mockResolvedValueOnce(
    data ?? ['Стартапы, поиск команды и нетворкинг', 'Искусство, фотография и дизайн', 'Музыка']
  );
  return spyedGetInterests;
};
