import { AbstractEntity } from '@/core/entity'
import { Column, Entity } from 'typeorm'

@Entity('shortcode')
export class ShortcodeEntity extends AbstractEntity {
	@Column()
	link: string

	@Column({ unique: true })
	code: string

	@Column({ default: 0 })
	views: number
}
