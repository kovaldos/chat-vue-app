<script>
import { ref } from "vue";
import { auth } from "../fb";
</script>
<script setup>
const email = ref("");
const password = ref("");

const login = async () => {
  try {
    await auth.signInWithEmailAndPassword(email.value, password.value);
  } catch (error) {
    console.error(error.message);
  }
};
</script>
<template>
  <div>
    <h2>Авторизация</h2>
    <form @submit.prevent="login">
      <label>
        Email:
        <input v-model="email" type="email" required />
      </label>
      <label>
        Пароль:
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
