export class CameraStatus {

    public video_connections: number;
    public audio_connections: number;
    public video_status: {
        result: string,
        mode: string,
    };
    public curvals: {
        scenemode: string,
        torch: string,
        coloreffect: string,
        focusmode: string,
        antibanding: string,
        whitebalance: string,
        zoom: string,
        exposure: string,
        flashmode: string,
        focus: string,
        exposure_lock: string,
        whitebalance_lock: string,
        focus_region: string,
        photo_size: string,
        orientation: string,
        idle: string,
        audio_only: string,
        overlay: string,
        quality: string,
        focus_homing: string,
        ip_address: string,
        motion_limit: string,
        adet_limit: string,
        night_vision: string,
        night_vision_average: string,
        night_vision_gain: string,
        video_recording: string,
        motion_detect: string,
        motion_display: string,
        video_chunk_len: string,
        gps_active: string,
        video_size: string,
        videomirror_flip_chunk_len: string,
        ffc: string,
        rtsp_video_formats: string,
        rtsp_audio_formats: string,
        video_connections: string,
        audio_connections: string,
        ivideon_streaming: string,
    };

}
