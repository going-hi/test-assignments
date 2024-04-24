import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateShortcodeDto } from '../dto/create-shortcode.dto'

import { InjectRepository } from '@nestjs/typeorm'
import { ShortcodeEntity } from '../entities/shortcode.entity'
import { Repository } from 'typeorm'
import * as shortid from 'shortid'

@Injectable()
export class ShortcodeService {
	constructor(
		@InjectRepository(ShortcodeEntity)
		private readonly shortcodeRepository: Repository<ShortcodeEntity>
	) {}

	async create(dto: CreateShortcodeDto) {
		if (dto.custom) {
			const oldCode = await this.getByCode(dto.custom)
			if (oldCode) throw new BadRequestException('Код с таким кастомным кодом уже существует')
			const createdCode = this.shortcodeRepository.create({ code: dto.custom, link: dto.url })
			return await this.shortcodeRepository.save(createdCode)
		}

		let code = shortid.generate()
		let oldCode = await this.getByCode(code)
		while (oldCode) {
			code = shortid.generate()
			oldCode = await this.getByCode(code)
		}
		const createdCode = this.shortcodeRepository.create({ code, link: dto.url })
		return await this.shortcodeRepository.save(createdCode)
	}

	async getByCode(code: string) {
		const linkCode = await this.shortcodeRepository.findOneBy({ code })
		return linkCode
	}

	async getAll() {
		const codes = await this.shortcodeRepository.find()
		return codes
	}

	async addView(code: string) {
		const ourCode = await this.getByCode(code)
		if (!ourCode) throw new NotFoundException('Код не найден')
		ourCode.views = ourCode.views + 1
		return await this.shortcodeRepository.save(ourCode)
	}
}
