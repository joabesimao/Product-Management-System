export interface UpdateAccessTokenRepository {
  updateAccessToken(
    id: number,
    data: Partial<{ accessToken: string }>
  ): Promise<void>;
}
