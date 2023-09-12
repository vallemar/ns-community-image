<script lang="ts" setup>
import { ref, $navigateBack } from 'nativescript-vue';

const items = ref(
  Array(1000)
    .fill(0)
    .map((_, index) => `Item ${index + 1}`),
);
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="auto, *">
      <Label
        text="Go Back"
        @tap="$navigateBack"
        class="text-center px-4 py-10 text-2xl text-gray-900 font-bold"
      />
      <Img
          height="200"
          row="1"
          width="200"
          src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
   
    </GridLayout>
  </Page>
</template>
