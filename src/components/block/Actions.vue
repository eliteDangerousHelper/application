<template>
  <div class="window5 actions">
    <Button @click="openOptions">options</Button>
    <transition name="no-mode-fade">
      <Modal v-if="showOptions" @close="closeOptions">
        <template v-slot:default>
          <Options></Options>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "../ui/Button.vue";
import Modal from "../ui/Modal.vue";
import Options from "./Options.vue";
import optionsStore from "@/store/main/options";

const { ipcRenderer } = window.require("electron");

export default defineComponent({
  name: "Actions",
  setup() {
    const showOptions = ref(false);

    const openOptions = () => {
      showOptions.value = true;
    };

    const closeOptions = () => {
      ipcRenderer.send("write-config", JSON.stringify(optionsStore.state));
      showOptions.value = false;
    };
    return {
      showOptions,
      openOptions,
      closeOptions
    };
  },
  components: {
    Button,
    Modal,
    Options
  }
});
</script>

<style lang="scss" scoped>
.actions {
  grid-area: actions;
}

.item {
  margin-right: 40px;
  margin-top: 15px;
}

.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity 0.5s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
.actions {
  .modal-container {
    height: 260px;
  }
}
</style>
