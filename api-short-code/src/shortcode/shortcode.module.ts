import { Module } from '@nestjs/common'
import { ShortcodeService } from './services/shortcode.service'
import { ShortcodeController, ShortcodeRedirectController } from './controllers'
import { ShortcodeEntity } from './entities'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forFeature([ShortcodeEntity])],
	controllers: [ShortcodeController, ShortcodeRedirectController],
	providers: [ShortcodeService]
})
export class ShortcodeModule {}
