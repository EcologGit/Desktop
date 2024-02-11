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
        @click="resetFilter()"
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

    <div class="modal-parameter">
      <div class="label-parameter">Принимаемые отходы</div>
      <div class="part-options">
        <div class="sort-reportCount">
          <input
            type="checkbox"
            id="plastic"
            value="Пластик"
            name="plastic"
            :checked="isCheckedWastTypes('Пластик')"
            @change="
              (v) =>
                checkboxSetParams(v.target.checked, 'Пластик', 'wast_types')
            "
          />
          <label for="no_matter">Пластик</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="checkbox"
            id="glass"
            value="Стекло"
            name="glass"
            :checked="isCheckedWastTypes('Стекло')"
            @change="
              (v) => checkboxSetParams(v.target.checked, 'Стекло', 'wast_types')
            "
          />
          <label for="zero">Стекло</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="checkbox"
            id="bat"
            value="Батарейки"
            name="bat"
            :checked="isCheckedWastTypes('Батарейки')"
            @change="
              (v) =>
                checkboxSetParams(v.target.checked, 'Батарейки', 'wast_types')
            "
          />
          <label for="no_more_than_20">Батарейки</label>
        </div>
        <div class="sort-reportCount">
          <input type="checkbox" id="lamp" value="Лампочки" name="lamp" />
          <label for="20_to_99">Лампочки</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="checkbox"
            id="newspapers"
            value="Макулатура"
            name="newspapers"
            :checked="isCheckedWastTypes('Макулатура')"
            @change="
              (v) =>
                checkboxSetParams(v.target.checked, 'Макулатура', 'wast_types')
            "
          />
          <label for="20_to_99">Макулатура</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="checkbox"
            id="metall"
            value="Металлолом"
            name="metall"
            :checked="isCheckedWastTypes('Металлолом')"
            @change="
              (v) =>
                checkboxSetParams(v.target.checked, 'Металлолом', 'wast_types')
            "
          />
          <label for="20_to_99">Металлолом</label>
        </div>
        <div class="sort-reportCount">
          <input
            type="checkbox"
            id="plasticCovers"
            value="Крышечки"
            name="plasticCovers"
            :checked="isCheckedWastTypes('Крышечки')"
            @change="
              (v) =>
                checkboxSetParams(v.target.checked, 'Крышечки', 'wast_types')
            "
          />
          <label for="20_to_99">Крышечки</label>
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
  wast_types: [],
});

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const checkboxSetParams = (val, name, nameFilter) => {
  if (val) {
    filters.value[nameFilter].push(name);
  } else {
    filters.value[nameFilter] = filters.value[nameFilter].filter(
      (val) => val !== name
    );
  }
};

const isCheckedWastTypes = (val) => {
  return filters.value["wast_types"].find((v) => v === val);
};

const resetFilter = () => {
  filters.value = {
    admarea_name: "",
    wast_types: [],
  };
};

const { isVisible } = toRefs(props);
const emit = defineEmits({ closeModal: null });

function getReadyFilter() {
  emit("getNewFilterValueModal", filters.value);
}
</script>
