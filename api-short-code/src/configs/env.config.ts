import { ConfigModuleOptions } from '@nestjs/config'
import { IsNumber, IsString } from 'class-validator'
import { envValidate } from '@/core/utils'
import { Type } from 'class-transformer'

export class EnvironmentVariables {
	@Type(() => Number)
	@IsNumber()
	PORT: number

	@IsString()
	POSTGRES_HOST: string

	@Type(() => Number)
	@IsNumber()
	POSTGRES_PORT: number

	@IsString()
	POSTGRES_USER: string

	@IsString()
	POSTGRES_PASSWORD: string

	@IsString()
	POSTGRES_DATABASE: string
}

export const EnvConfigOptions: ConfigModuleOptions = {
	validate: envValidate(EnvironmentVariables),
	isGlobal: true
}
