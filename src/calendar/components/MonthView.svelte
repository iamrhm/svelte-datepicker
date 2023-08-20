<script>
  import {
    getMonthCalendar, isSameDay,
    months, weekDay,
  } from '../utils';

  /* passed props */
  export let currDate;
  export let changeCalendarView;
  export let updateDate;
  export let size = 'full-view';
  export let selectCalendarDate = (d) => {};

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

  function goTo(newDate) {
    if (size === 'small-view') {
      updateDate(newDate);
      changeCalendarView();
    } else {
      selectCalendarDate(newDate);
    }
  }

  $:({
    month, year,
    daysDistribution,
  } = getMonthCalendar(currDate));
</script>

<div class:small-view={size === 'small-view'}>
  <div class="calendar-header">
    <div class="button-wrapper" class:hidden-btn={size === 'small-view'}>
      <button class="action-button" on:click={previousMonth}>
        Prev
      </button>
    </div>
    <button
      class="month-year-block"
      class:text-14={size === 'small-view'}
      on:click={changeCalendarView}
    >
      {months[month]}
      {#if (size !== 'small-view')}
        , {year}
      {/if}
    </button>
    <div class="button-wrapper" class:hidden-btn={size === 'small-view'}>
      <button class="action-button" on:click={nextMonth}>
        Next
      </button>
    </div>
  </div>
  <div class="week-days">
    {#each weekDay as d, i}
      <div class="block" class:unset-height={size === 'small-view'}>
        {#if (size === 'small-view')}
          {d.charAt(0).toUpperCase()}
          {:else}
          {d}
        {/if}
      </div>
    {/each}
  </div>
  <div class="month-days">
    {#each daysDistribution as day, i}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          class="block pointer"
          class:unset-height={size === 'small-view'}
          on:click={() => goTo(new Date(year, month, i-1))}
        >
          {#if (isSameDay(new Date(year, month, i-1), new Date()))}
            <span
              class="current-day-indicator"
            >
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
  .calendar-header {
    display: flex;
    padding: 16px 12px;
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
    font-size: 14px;
    font-weight: 500;
    transition: border-color 0.25s;
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    height: 5em;
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
    font-size: 18px;
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
    padding: 8px 9px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hidden-btn {
    visibility: hidden;
  }
  .text-14 {
    font-size: 14px;
  }
  .unset-height{
    height: unset;
  }
  .pointer {
    cursor: pointer;
  }
  @media (min-width: 992px) {
    .calendar-header {
      padding: 24px 18px;
    }
    .month-year-block {
      font-size: 24px;
    }
    .block {
      font-size: 18px;
    }
    .text-14 {
      font-size: 16px;
    }
    .button-wrapper {
      width: calc(100% / 7);
    }
  }
</style>