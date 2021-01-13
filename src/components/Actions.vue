<template>
  <div class="window5 alert">
    <el-row>
      <el-col :span="12">
        <Button @click="openOptions">options</Button>
      </el-col>
      <el-col :span="12">
        <Button>param</Button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import Button from "./Button.vue";
import Options from "./Options.vue";
import { ElMessageBox as MessageBox } from "element-plus";
import optionsStore from "../store/main/options";

const { ipcRenderer } = window.require("electron");

export default defineComponent({
  name: "Actions",
  setup() {
    const openOptions = () => {
      MessageBox({
        message: h(Options),
        confirmButtonText: "OK",
        callback: action => {
          if (action == "confirm") {
            ipcRenderer.send(
              "write-config",
              JSON.stringify(optionsStore.state)
            );
          }
        }
      });
    };
    return {
      openOptions
    };
  },
  components: {
    Button
  }
});
</script>

<style lang="scss" scoped>
.item {
  margin-right: 40px;
  margin-top: 15px;
}
</style>
