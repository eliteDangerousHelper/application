<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span>Station: {{ station.name }}</span>
      </div>
    </template>
    <div>
      <el-tag
        effect="dark"
        type="info"
        v-for="service in station.services"
        :key="service"
        style="margin-left: 10px;"
      >
        {{ service }}
      </el-tag>
    </div>
    <div>Gouvernement: {{ station.government }}</div>
    <div>Economie: {{ station.economy }}</div>
    <div>Faction dirigente: {{ station.faction.name }}</div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";

export default defineComponent({
  name: "DockedStation",
  setup() {
    const station = computed(() => systemStore.state.dockedStation);
    return {
      station
    };
  }
});
</script>
