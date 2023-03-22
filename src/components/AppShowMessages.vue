<template>
  <div>
    <h1>Messages</h1>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <strong>{{ message.user.email }}:</strong> {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { auth, db } from "../fb";
import { ref, watchEffect } from "vue";
</script>

<script setup>
const messages = ref([]);
watchEffect(() => {
  db
    .collection("messages")
    .orderBy("createdAt")
    .onSnapshot((snapshot) => {
      messages.value = snapshot.docs.map((doc) => {
        const data = doc.data();
        const user = auth.currentUser;
        return {
          id: doc.id,
          user: {
            id: data.userId,
            email: user && user.uid === data.userId ? "You" : data.email,
          },
          text: data.text,
        };
      });
    });
});
</script>
