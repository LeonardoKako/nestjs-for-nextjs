import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome precida ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;
  @IsString({ message: 'Senha precida ser uma string' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  password: string;
}
