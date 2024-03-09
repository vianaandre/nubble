import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" bold mb="s32">
        Criar uma conta
      </Text>

      <TextInput
        placeholder="@"
        label="Seu username"
        boxProps={{
          mb: 's20',
        }}
      />
      <TextInput
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{
          mb: 's20',
        }}
      />
      <TextInput
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{
          mb: 's20',
        }}
      />
      <PasswordInput
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{
          mb: 's48',
        }}
      />

      <Button title="Criar minha conta" />
    </Screen>
  );
}
