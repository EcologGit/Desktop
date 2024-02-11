<template>
  <VueModal
    :modalClass="['modal-content-filter-border', 'padding-gap-32']"
    width="410px"
    :isVisible="isVisible"
  >
    <div style="display: flex; justify-content: space-between">
      <p>Фильтры</p>
      <button
        style="
          width: 84px;
          height: 13px;
          border-radius: 25px;
          gap: 16px;
          background-color: transparent;
          border-color: transparent;
        "
        @click="resetFilter"
      >
        <p
          style="
            font-size: 14px;
            font-weight: 600;
            line-height: 11px;
            letter-spacing: 1px;
            text-align: left;
            width: 84px;
            height: 11px;
          "
        >
          СБРОСИТЬ
        </p>
      </button>
    </div>

    <div style="display: flex; gap: 32px; flex-direction: column">
      <div style="display: flex; gap: 16px; flex-direction: column">
        <p class="label-parameter">Населенный пункт</p>
        <input
          placeholder="Поиск населенного пункта"
          class="search-parameter"
          v-model="filters.admarea_name"
        />
      </div>
    </div>

    <div style="display: flex; gap: 32px; flex-direction: column">
      <div style="display: flex; gap: 16px; flex-direction: column">
        <p class="label-parameter">Период проведения</p>
        <div class="input-range-button-block">
          <input
            placeholder="От"
            class="search-parameter"
            type="date"
            v-model="filters.time_start"
          />
          <input
            placeholder="До"
            class="search-parameter"
            type="date"
            v-model="filters.time_of_close"
          />
        </div>
      </div>
    </div>

    <div class="modal-parameter">
      <div class="label-parameter">Статус</div>
      <div class="part-options">
        <div class="sort-reportCount">
          <input
            type="radio"
            id="completed"
            value="Завершено"
            name="reportCount"
            v-model="filters.status"
          />
          <label for="no_matter">Завершено</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="radio"
            id="planned"
            value="Запланировано"
            name="reportCount"
            v-model="filters.status"
          />
          <label for="zero">Запланировано</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="radio"
            id="active"
            value="Активно"
            name="reportCount"
            v-model="filters.status"
          />
          <label for="no_more_than_20">Активно</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="radio"
            id="cancelled"
            value="Отменено"
            name="reportCount"
            v-model="filters.status"
          />
          <label for="20_to_99">Отменено</label>
        </div>
      </div>
    </div>

    <button class="single-button setting-button" @click="getReadyFilter">
      <img
        class="icon-btn"
        width="18"
        height="18"
        src="@/assets/imgs/ready.png"
        alt="Ready"
      />
      Готово
    </button>
  </VueModal>
</template>

<script setup>
import VueModal from "@/components/ui/modal/VueModal.vue";
import { toRefs, defineEmits, ref } from "vue";
const filters = ref({
  admarea_name: "",
});

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const resetFilter = () => {
  filters.value = {
    admarea_name: "",
    time_start: null,
    time_of_close: null,
    status: null,
  };
};

const { isVisible } = toRefs(props);
const emit = defineEmits({ closeModal: null });

function getReadyFilter() {
  emit("getNewFilterValueModal", filters.value);
}
</script>
