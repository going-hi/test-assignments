import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ShortcodeModule } from '@/shortcode/shortcode.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeormOptions, EnvConfigOptions } from '@/configs'

@Module({
	imports: [
		ConfigModule.forRoot(EnvConfigOptions),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getTypeormOptions
		}),
		ShortcodeModule
	]
})
export class AppModule {}
