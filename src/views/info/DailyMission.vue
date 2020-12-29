<template lang="pug">
div.container
  div.calendar
    template(v-for="(weekName, i) of weekNames")
      div.day.calendar-header(:class="{ today: isTodayWeek(weekName) }")
         h2 {{ weekName }}
      div.day(v-for="dailyMission of dailyMissionsByDay[i]" :class="{ today: isTodayWeek(weekName) }")
        h3 {{ dailyMission.NAME }}
        br
        p {{ dailyMission.DESC }}
</template>

<script lang="ts">
import Component from 'vue-class-component';
import VueBase from '@/components/VueBase';
import Enumerable from 'linq';

@Component({
  components: {
  },
})
export default class extends VueBase {
  public now = new Date();

  public get weekFormat() {
    return new Intl.DateTimeFormat(this.dataManager.locale, { weekday: 'long' });
  }

  public get weeks() {
    return [
      new Date(Date.UTC(2020, 1, 2)), // sunday
      new Date(Date.UTC(2020, 1, 3)), // monday
      new Date(Date.UTC(2020, 1, 4)),
      new Date(Date.UTC(2020, 1, 5)),
      new Date(Date.UTC(2020, 1, 6)),
      new Date(Date.UTC(2020, 1, 7)),
      new Date(Date.UTC(2020, 1, 8)),
    ];
  }

  public get weekNames() {
    return this.weeks.map((p) => this.weekFormat.format(p));
  }

  public get dailyMissionsByDay() {
    return Enumerable.from(this.dataManager.degreeDailyMissions)
      .groupBy((p) => p.DF)
      .select((p) => p.skip(1).toArray())
      .toArray();
  }

  public isTodayWeek(weekName: string) {
    const localeTimezone = {
      'ja-JP': 'Asia/Tokyo',
      'zh-TW': 'Asia/Taipei',
    };
    const weekFormat = new Intl.DateTimeFormat(this.dataManager.locale, {
      weekday: 'long',
      timeZone: localeTimezone[this.dataManager.locale],
    });
    return weekFormat.format(this.now) === weekName;
  }
}
</script>

<style lang="sass" scoped>
.calendar
  display: grid
  grid-template-rows: auto auto auto auto auto auto
  grid-auto-flow: column
  grid-gap: 3px 3px
  max-width: 0

.calendar-header
  height: auto !important

.today
  background: #F5F7FA
.dark-mode .today
  background: #313846

.day
  border: 1px solid #EBEEF5
  width: 180px
  height: 120px
  padding: 12px
  text-align: center

.dark-mode .day
  border-color: #121820
</style>
