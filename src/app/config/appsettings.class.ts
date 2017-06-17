import {environment} from '../../environments/environment';

export class AppSettings {
    public static API_ENDPOINT = environment.base_api_url + '/api/';
    public static MOTION_VIDEO_URL = environment.base_api_url + '/video';
    public static LIVE_VIDEO_URL = environment.base_phone_url + '/video';
    public static PHONE_CONFIG_URL = environment.base_phone_url + '/';
    public static IS_DEBUG = !environment.production;
}
