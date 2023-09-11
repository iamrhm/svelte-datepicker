<script>
  import {
    getMonthCalendar, isSameDay,
    months, weekDay, ViewType,
  } from '../utils';
  import NextIcon from './Icons/NextIcon.svelte';
  import PrevIcon from './Icons/PrevIcon.svelte';

  /* passed props */
  export let currDate;
  export let className = '';
  export let onViewTypeChange = (d) => {};
  export let onDateChange = (d) => {};

  $:showDate = currDate || new Date();
  $:({
    month, year,
    daysDistribution,
  } = getMonthCalendar(showDate));

  function previousMonth() {
    const currYear = showDate.getFullYear();
    const currMonth = showDate.getMonth();
    if (currMonth - 1 < 0) {
      showDate = new Date(currYear - 1, 11, 1);
    } else {
      showDate = new Date(currYear, currMonth - 1, 1);
    }
  }
  function nextMonth() {
    const currYear = showDate.getFullYear();
    const currMonth = showDate.getMonth();
    if (currMonth + 1 > 11) {
      showDate = new Date(currYear + 1, 0, 1);
    } else {
      showDate = new Date(currYear, currMonth + 1, 1);
    }
  }
  function onSelectDate(newDate) {
    onDateChange(newDate);
  }
</script>

<div class={className ? `daily-calendar-wrapper ${className}` : 'daily-calendar-wrapper'}>
  <!-- Daily calendar header  -->
  <div class="calendar-header">
    <div class="button-wrapper">
      <button class="action-button" on:click={previousMonth}>
        <PrevIcon />
      </button>
    </div>
    <button
      class="action-button month-year-indicator"
      on:click={() => onViewTypeChange(ViewType.year)}
    >
      {months[month]}, {year}
    </button>
    <div class="button-wrapper">
      <button class="action-button" on:click={nextMonth}>
        <NextIcon />
      </button>
    </div>
  </div>
  <!-- Weekdays header row -->
  <div class="week-days-row">
    {#each weekDay as d, i}
      <div class="block weekday-name-block">
        {d.charAt(0).toUpperCase()}
      </div>
    {/each}
  </div>
  <!-- Date container -->
  <div class="daily-date-container">
    {#each daysDistribution as day, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="block daily-date-block pointer"
          on:click={() => onSelectDate(new Date(year, month, i-1))}
        >
          {#if (isSameDay(new Date(year, month, i-1), new Date()))}
            <span
              class="date-block current-day-indicator"
            >
              {day}
            </span>
            {:else}
            <span class="date-block">
              {day}
            </span>
          {/if}
        </div>
        {#if (i + 1) % 7 === 0}
          <br />
        {/if}
    {/each}
  </div>
</div>

<style>
  .week-days-row,
  .daily-date-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .weekday-name-block,
  .daily-date-block {
    width: calc(100% / 7);
    font-variant-numeric: tabular-nums;
  }
  .weekday-name-block {
    font-weight: bold;
  }
  .month-year-indicator {
    outline: none;
    background-color: transparent;
    border: none;
    font-weight: 800;
    font-size: 1em;
    padding: 0.71em;
  }
  .date-block {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .current-day-indicator {
    background: #747bff;
    padding: 0.57em 0.85em;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>