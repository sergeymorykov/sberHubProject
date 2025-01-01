import axios from 'axios';
import { getConfigValue } from '@brojs/cli';

const baseUrl = getConfigValue('sberhubproject.api');

export const network = axios.create({ baseURL: baseUrl });
