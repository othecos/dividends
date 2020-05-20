import { isDevMode } from '@angular/core'

export const URL_PROD = 'https://othecos-api-dividends.herokuapp.com/v1'
export const URL_LOCAL = 'http://localhost:8080/v1'

export const URL = isDevMode() ? URL_LOCAL : URL_PROD
