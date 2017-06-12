import { environment } from '../../environments/environment';

export class AppSettings {
    public static API_ENDPOINT = environment.base_api_url + '/api/';
    public static VIDEO_URL = environment.base_phone_url + '/video';
}
