export type UserSession = {
    id: string,
    userId: string,
    expiresAt: Date,
    createdAt: Date,
    updatedAt: Date,
    token: string,
    ipAddress?: string | null | undefined,
    userAgent?: string | null | undefined
}

export type SignInData = {
    email: string,
    password: string
}

export type SignInResult = {
    success: boolean,
    message?: string,
    errors?: any,
    inputs?: SignInData
    statusCode?: number
}