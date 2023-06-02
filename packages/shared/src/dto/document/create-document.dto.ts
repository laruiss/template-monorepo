import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateDocumentDto {
  @ApiProperty({
    description: 'Titre du document',
  })
  @IsNotEmpty()
  @IsString()
    title: string

  @IsNotEmpty({ message: 'La description est requise' })
  @IsString()
    description: string

  @IsString()
    content: string
}
