import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        errorMessage="Mensagem de erro."
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{
          mb: 's20',
        }}
      />
      <PasswordInput
        boxProps={{mb: 's8'}}
        placeholder="Digite sua senha"
        label="Senha"
      />

      <Text preset="paragraphSmall" bold color="primary">
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button mt="s12" preset="outline" title="Criar conta" />
    </Screen>
  );
}
