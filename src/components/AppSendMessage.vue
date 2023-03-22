<script>
import { ref } from "vue";
import { auth, db } from "../fb";
</script>
<script setup>
const message = ref("");

const sendMessage = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.error("Пользователь не авторизован");
    return;
  }

  try {
    await db.collection("messages").add({
      text: message.value,
      user: user.uid,
      createdAt: new Date(),
    });
    message.value = "";
  } catch (error) {
    console.error(error.message);
  }
};
</script>
<template>
  <form @submit.prevent="sendMessage">
    <label>
      Сообщение:
      <input v-model="message" type="text" required />
    </label>
    <button type="submit">Отправить</button>
  </form>
</template>
