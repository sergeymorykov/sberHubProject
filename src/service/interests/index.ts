import {network} from '../network';
import { GetInterestsResponse } from './types';

class InterestsService {
    async getInterests() {
        const res = await network.get<GetInterestsResponse>('/interests');
        return res.data;
    }
}

export const interestsService = new InterestsService();