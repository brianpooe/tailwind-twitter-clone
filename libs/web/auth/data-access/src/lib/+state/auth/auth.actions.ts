import { createAction, props } from '@ngrx/store'
import { LoginInput, RegisterInput, User } from '@beehive/web/core/data-access'

export const ensureLogin = createAction('[Auth] EnsureLogin')

export const login = createAction('[Auth] Login', props<{ input: LoginInput }>())

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>())

export const loginSuccess = createAction('[Auth] Login Success', props<{ user: User }>())

export const logout = createAction('[Auth] Logout')

export const logoutFailure = createAction('[Auth] Logout Failure', props<{ error: any }>())

export const logoutSuccess = createAction('[Auth] Logout Success')

export const redirectToLogin = createAction('[Auth] RedirectToLogin', props<{ url?: string }>())

export const register = createAction('[Auth] Register', props<{ input: RegisterInput }>())

export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>())

export const registerSuccess = createAction('[Auth] Register Success', props<{ user: User }>())
