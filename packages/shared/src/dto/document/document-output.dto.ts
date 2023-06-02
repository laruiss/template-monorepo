import { ApiProperty } from '@nestjs/swagger'
import { UpdateDocumentDto } from './update-document.dto'

export class UserOutputDto extends UpdateDocumentDto {
  @ApiProperty({
    description: 'Id unique du document',
  })
    id: string
}
