import { Configuration } from '@/api';
import { BaseAPI } from '@/api/base';
import { AuthApiFp } from '@/api';
import { ProductApiFp } from '@/api';
import { UserApiFp } from '@/api';
import { HealthCheckApiFp } from '@/api';

const configuration = new Configuration({
    basePath: process.env.URL,
});

const Base = new BaseAPI(configuration); // Initialize the API client
export const AuthApi = AuthApiFp(configuration);
export const ProductApi = ProductApiFp(configuration);
export const UserApi = UserApiFp(configuration);
export const HealthCheckApi = HealthCheckApiFp(configuration);
export default Base;