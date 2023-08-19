<script>
  import {
    getCalendar, isSameDay,
    months, weekDay,
  } from '../utils';

  /* passed props */
  export let currDate;
  export let changeCalendarView;
  export let updateDate;

  function previousMonth() {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();
    if (currMonth - 1 < 0) {
      updateDate(new Date(currYear - 1, 11, 1));
    } else {
      updateDate(new Date(currYear, currMonth - 1, 1));
    }
  }

  function nextMonth() {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();
    if (currMonth + 1 > 11) {
      updateDate(new Date(currYear + 1, 0, 1));
    } else {
      updateDate(new Date(currYear, currMonth + 1, 1));
    }
  }

  $:({
    month, year,
    daysDistribution,
  } = getCalendar(currDate));
</script>

<div class="calendar-wrapper">
  <div class="calendar-header">
    <button class="action-button" on:click={previousMonth}>
      Prev
    </button>
    <button
      class="month-year-block"
      on:click={changeCalendarView}
    >
      {months[month]}, {year}
    </button>
    <button class="action-button" on:click={nextMonth}>
      Next
    </button>
  </div>
  <div class="week-days">
    {#each weekDay as d, i}
      <div class="block">
        {d}
      </div>
    {/each}
  </div>
  <div class="month-days">
    {#each daysDistribution as day, i}
        <div class="block">
          {#if (isSameDay(new Date(year, month, i-1), new Date()))}
            <span class="current-day-indicator">
              {day}
            </span>
            {:else}
            {day}
          {/if}
        </div>
        {#if (i + 1) % 7 === 0}
        <br />
      {/if}
    {/each}
  </div>
</div>

<style>
  .calendar-wrapper {
    width: 95%;
    height: 95%;
    padding: 16px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    max-width: 824px;
  }
  .calendar-header {
    display: flex;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
  }
  .week-days,
  .month-days {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .block {
    display: flex;
    padding: 16px 18px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    transition: border-color 0.25s;
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
  }
  .month-year-block,
  .action-button {
    padding: 12px 14px;
    cursor: pointer;
    border-radius: 4px;
  }
  .month-year-block {
    outline: none;
    background-color: transparent;
    border: none;
    font-weight: 800;
    font-size: 24px;
  }
  .action-button {
    padding: 10px 16px;
    border: 1px solid transparent;
    border-color: rgba(153 153 153/ 0.6);
    transition: border-color 0.25s;
    font-size: 12px;
    outline: none;
  }
  .action-button:hover {
    border-color: rgb(153 153 153);
  }
  .action-button:focus,
  .action-button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  .current-day-indicator {
    background: #747bff;
    width: 34px;
    height: 34px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>