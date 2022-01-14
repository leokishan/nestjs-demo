import { ApiProperty } from '@nestjs/swagger';

export class CreateSuscriberDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  verifiedEmail: boolean;

  @ApiProperty()
  subscriberName: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  frequency: string;
}
