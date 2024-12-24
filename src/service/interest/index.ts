import {network} from '../network';
import { GetInterestResponse } from './types';

class InterestService {
    async getInterest() {
        const res = await network.get<GetInterestResponse>('/interest');
        return res.data;
    }
}

export const interestService = new InterestService();