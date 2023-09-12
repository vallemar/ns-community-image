<script lang="ts" setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  $navigateTo,
} from 'nativescript-vue';
import Details from './Details.vue';

const counter = ref(0);
const message = computed(() => {
  return `Blank {N}-Vue app: ${counter.value}`;
});

function logMessage() {
  console.log('You have tapped the message!');
}

let interval: any;
onMounted(() => {
  console.log('mounted');
  interval = setInterval(() => counter.value++, 100);
});

onUnmounted(() => {
  console.log('unmounted');
  clearInterval(interval);
});
</script>

<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>

      <StackLayout  class="px-4">
        <Img
          height="200"
          width="200"
          src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />

        <Button
          row="2"
          @tap="$navigateTo(Details, {transition: {name: 'slideLeft', duration: 2000}})"
          class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
          horizontalAlignment="center"
        >
          View Details
        </Button>
      </StackLayout>
    </Page>
  </Frame>
</template>

<style>
/* .info {
    font-size: 20;
  } */
</style>
