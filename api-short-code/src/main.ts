import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

// TODO: started log
// TODO: тесты

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)
	const PORT = configService.get('PORT')
	await app.listen(PORT)
}
bootstrap()
