import { Controller, Post, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common'
import { ShortcodeService } from '../services'
import { CreateShortcodeDto } from '../dto'

@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller('api/shortcode')
export class ShortcodeController {
	constructor(private readonly shortcodeService: ShortcodeService) {}

	@Post()
	create(@Body() dto: CreateShortcodeDto) {
		return this.shortcodeService.create(dto)
	}

	@Get()
	getAll() {
		return this.shortcodeService.getAll()
	}
}
