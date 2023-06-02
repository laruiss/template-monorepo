import { CreateDocumentDto } from './create-document.dto'

import { PartialType } from '@nestjs/swagger'

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {}
