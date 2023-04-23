<template>
  <div class="home">
    <authenticator>
      <template v-slot="{ user, signOut }">
        <div>
          <div class="mb-7">
            <h1 class="text-xl font-bold mb-4">Hello {{ user.username }}!</h1>
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              @click="signOut"
            >
              Sign Out
            </button>
          </div>

          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2"
            @click="router.push({ name: 'AlbumsView' })"
          >
            Your Albums
          </button>

          <button
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2"
            @click="router.push({ name: 'AlbumView', params: { id: '123' } })"
          >
            Album 123
          </button>
        </div>
      </template>
    </authenticator>
  </div>
</template>

<script setup>
  import { Authenticator } from '@aws-amplify/ui-vue';
  import '@aws-amplify/ui-vue/styles.css';
  import { useRouter } from 'vue-router';

  const router = useRouter();
</script>
