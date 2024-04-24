import { Controller, UsePipes, ValidationPipe, Get, Res, Param } from '@nestjs/common'
import { ShortcodeService } from '../services/shortcode.service'
import { Response } from 'express'

@UsePipes(new ValidationPipe({ whitelist: true }))
@Controller()
export class ShortcodeRedirectController {
	constructor(private readonly shortcodeService: ShortcodeService) {}

	@Get(':code')
	async redirect(@Res() res: Response, @Param('code') code: string) {
		const ourCode = await this.shortcodeService.addView(code)
		return res.redirect(ourCode.link)
	}
}
