export interface LoginOk {
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    expiresIn: number;
}