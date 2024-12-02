import { Configuration, FileUploadApiFp } from '@/api';
import { BaseAPI } from '@/api/base';
import { AuthApiFp } from '@/api';
import { ProductApiFp } from '@/api';
import { UserApiFp } from '@/api';
import { HealthCheckApiFp } from '@/api';
import { ChatApiFp } from '@/api';
import { OrderApiFp } from '@/api';



const configuration = new Configuration({
    basePath: 'https://lucas-digital-market-dev.nysm.work',
    baseOptions: {
        credentials: 'include',
    }
});

const Base = new BaseAPI(configuration); // Initialize the API client
export const AuthApi = AuthApiFp(configuration);
export const ProductApi = ProductApiFp(configuration);
export const UserApi = UserApiFp(configuration);
export const HealthCheckApi = HealthCheckApiFp(configuration);
export const ChatApi = ChatApiFp(configuration);
export const OrderApi = OrderApiFp(configuration);
export const FileUploadApi = FileUploadApiFp(configuration);
export default Base;