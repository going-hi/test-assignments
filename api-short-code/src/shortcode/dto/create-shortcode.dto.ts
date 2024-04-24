import { IsOptional, IsString, IsUrl, MaxLength } from 'class-validator'

export class CreateShortcodeDto {
	@IsUrl()
	url: string

	@IsOptional()
	@IsString()
	@MaxLength(20)
	custom: string
}
