<template>
  <div class="object-events" v-if="actualEvents.length > 0">
    <p>Мероприятия</p>
    <sliderTouch
      :isLoading="isLoading"
      :hasNextData="urlNextActualEvent === null"
      :setIsLoadReady="setIsLoadReady"
    >
      <template v-slot:sliderContent>
        <div
          class="event-small-card"
          v-for="actualEvent in actualEvents"
          v-bind:key="actualEvent.id"
        >
          <router-link :to="`/review/events/${actualEvent.id}`">
            <img
              class="small-card-img"
              v-bind:src="getMediaSrc(actualEvent.photo)"
              alt=""
          /></router-link>
          <div class="small-card-name">
            <p class="small-card-p">{{ actualEvent.name }}</p>
          </div>
          <div class="parameters-object">
            <div class="parameter-object date">
              <img
                class="icon-margin"
                width="18"
                height="16"
                src="../../../assets/imgs/calendar.png"
                alt=""
              />
              {{ actualEvent.date }}
            </div>
            <div class="parameter-object time">
              <img
                class="icon-margin"
                width="18"
                height="18"
                src="../../../assets/imgs/clock.png  "
                alt=""
              />
              {{ actualEvent.time }}
            </div>
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          "
        >
          <div
            v-show="isLoadReady && isLoading"
            class="animation-logo logo-animation"
          ></div>
        </div>
      </template>
    </sliderTouch>
  </div>
</template>

<style src="./styles.css"></style>

<script>
import { url } from "@/main.js";
import moment from "moment";
import { eventStatuses } from "..//..//..//consts//eventStatus//eventStatus";
import "..//..//..//consts//eventStatus//styles.css";
import "..//..//ui//sliderTouch//styles.css";
import sliderTouch from "..//..//ui//sliderTouch//sliderTouch.vue";
export default {
  props: {
    objectId: Number,
    eventUrl: String
  },
  components: {
    sliderTouch,
  },
  data() {
    return {
      actualEvents: [],
      eventStatusesDict: [],
      urlNextActualEvent: this.eventUrl,
      isLoading: false,
      isLoadReady: false,
    };
  },
  created() {
    return {
      actualEvents: this.fetchActualEvents(this.urlNextActualEvent),
      eventStatusesDict: this.fetchEventsStatusDict(
        `${url}/review/statuses-event-dict/`
      ),
    };
  },
  methods: {
    setIsLoadReady(val) {
      this.isLoadReady = val;
    },
    getMediaSrc(eventUrl) {
      return `${url}${eventUrl}/`;
    },
    getStatusName(statusId) {
      return this.eventStatusesDict
        ? this.eventStatusesDict.find((key) => key.status_id === statusId)?.name
        : "";
    },
    getStatusClass(status_id) {
      let statusName = this.getStatusName(status_id);
      if (statusName) {
        return Object.entries(eventStatuses).find(
          (el) => el[1] === statusName
        )[0];
      }
      return "";
    },
    async fetchEventsStatusDict(urlEventStatuses) {
      await fetch(urlEventStatuses)
        .then((response) => response.json())
        .then((response) => {
          this.eventStatusesDict = response.results;
        });
    },
    async fetchActualEvents(url) {
      this.isLoading = true;
      await fetch(url)
        .then((response) => response.json())
        .then((response) => {
          const newData = response.results.map((key) => {
            return {
              id: key.pk,
              date: moment(key.time_start).format("DD.MM.YYYY"),
              time: moment(key.time_start).format("hh:mm"),
              ...key,
            };
          });
          if (this.actualEvents.length > 0){
            this.actualEvents = [...this.actualEvents, ...newData]
          }
          else {
            this.actualEvents = newData;
          }
          
          this.urlNextActualEvent = response.next;
        })
        .catch((error) => {
          this.answer = "Ошибка! Нет доступа к API. " + error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  watch: {
    isLoadReady: {
      async handler(newValue) {
        if (!this.isLoading && newValue && this.urlNextActualEvent) {
          await this.fetchActualEvents(
            this.urlNextActualEvent
          )
    
        }
      },
    },
  },
};
</script>
